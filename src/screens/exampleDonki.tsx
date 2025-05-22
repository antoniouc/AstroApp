// src/features/neo/NeoList.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, } from 'react-native';
import { GetAsteroidUseCase } from '../domain/usecases/GetAsteroidUseCases';
import { useAsteroidViewModel, asteroidObservable } from '../viewmodel/AsteroidViewModel';
import { NeoCard } from '../components/CardAsteroid';
import dayjs from 'dayjs';
import { AsteroidApiService } from '../data/remote/AsteroidApiService';
import { AsteroidRepositoryImpl } from '../data/AsteroidRepositoryImpl';
import { Asteroid } from '../domain/entities/Asteroid';

export const NeoList = () => {
  const apiService = new AsteroidApiService();
  const repository = new AsteroidRepositoryImpl(apiService);
  const useCase = new GetAsteroidUseCase(repository);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const {  loading } = useAsteroidViewModel(useCase, date);
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
    useEffect(() => {
    const listener = (data: Asteroid[]) => setAsteroids(data);
    asteroidObservable.subscribe(listener);
    return () => asteroidObservable.unsubscribe(listener);
  }, []);
  const nextDay = () => setDate(dayjs(date).add(1, 'day').format('YYYY-MM-DD'));
  const prevDay = () => setDate(dayjs(date).subtract(1, 'day').format('YYYY-MM-DD'));

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Fecha: {date}</Text>
      <Button title="Día anterior" onPress={prevDay} />
      <Button title="Día siguiente" onPress={nextDay} />

      {loading ? <Text>Cargando...</Text> : (
        <ScrollView style={{ marginTop: 16 }}>
          {asteroids.map((asteroid) => (
            <NeoCard key={asteroid.id} asteroid={asteroid} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
