import React, { useState } from 'react';
import { ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { MarsPhotoCard } from '../components/MarsPhotoCard';
import { MarsPhotoApiService } from '../data/remote/MarsPhotoApiService';
import { MarsPhotoRepositoryImpl } from '../data/MarsPhotoRepositoryImpl';
import { GetMarsPhotosUseCase } from '../domain/usecases/MarsPhotoUseCases';
import { useMarsPhotoViewModel } from '../viewmodel/MarsPhotoViewModel';
import { MarsSearch } from '../components/MarsSearch';

export const MarsGallery = () => {
  const api = new MarsPhotoApiService();
  const repo = new MarsPhotoRepositoryImpl(api);
  const useCase = new GetMarsPhotosUseCase(repo);

  const [rover, setRover] = useState('curiosity');
  const [date, setDate] = useState('2021-01-01');
  const [camera, setCamera] = useState<string | undefined>(undefined);

  const handleSearch = (rover: string, date: string, camera?: string) => {
  setRover(rover);
  setDate(date);
  setCamera(camera);
};



  const { photos, loading } = useMarsPhotoViewModel(useCase, rover, date, camera);

  return (
    <>
    <MarsSearch onSearch={handleSearch} />
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        photos.map(photo => <MarsPhotoCard key={photo.id} photo={photo} />)
      )}
    </ScrollView>
    </>
  );
};
