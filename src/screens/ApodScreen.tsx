import React from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, StyleSheet} from 'react-native';
import { useApodViewModel } from '../viewmodel/ApodviewModel';
import { GetApodUseCase } from '../domain/usecases/GetApodUseCases';
import { ApodRepositoryImpl } from '../data/ApodRepositoryImpl';
import { ApodApiService } from '../data/remote/ApodApiService';

const ApodScreen = () => {
  const apiService = new ApodApiService();
  const repository = new ApodRepositoryImpl(apiService);
  const useCase = new GetApodUseCase(repository);

  const { apod, loading, error } = useApodViewModel(useCase);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error: {error}</Text>;

  return (


      <ScrollView>
    <View style={{ padding: 20, alignItems: 'center' }}>
        <Text style={styles.title}>Imagen del dia</Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{apod?.title}</Text>
        {apod?.media_type === 'image' && (
          <Image source={{ uri: apod.url }} style={{ width: '100%', height: 300, marginVertical: 10 }} />
        )}
        <Text>{apod?.explanation}</Text>
    </View>
      </ScrollView>

  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    marginVertical: 10,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  explanation: {
    fontSize: 16,
  },
});

export default ApodScreen;