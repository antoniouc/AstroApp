import { useEffect, useState } from 'react';
import { MarsPhoto } from '../domain/entities/MarsPhoto';
import { GetMarsPhotosUseCase } from '../domain/usecases/MarsPhotoUseCases';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useMarsPhotoViewModel = (
  useCase: GetMarsPhotosUseCase,
  rover: string,
  date: string,
  camera?: string
) => {
  const [photos, setPhotos] = useState<MarsPhoto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const key = `mars-${rover}-${date}-${camera || 'all'}`;

    const fetchData = async () => {
      setLoading(true);
      const cached = await AsyncStorage.getItem(key);

      if (cached) {
        setPhotos(JSON.parse(cached));
        setLoading(false);
        return;
      }

      const result = await useCase.execute(rover, date, camera);
      setPhotos(result);
      await AsyncStorage.setItem(key, JSON.stringify(result));
      setLoading(false);
    };

    fetchData();
  }, [rover, date, camera]);

  return { photos, loading };
};
