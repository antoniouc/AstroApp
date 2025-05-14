import { useState } from 'react';
import { getEarthAssetUseCase } from '../domain/usecases/GetEarthAssetUseCase';
import { EarthAsset } from '../domain/entities/EarthAsset';

export const useEarthAssetViewModel = () => {
  const [asset, setAsset] = useState<EarthAsset | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchEarthAsset = async (lat: number, lon: number, date: string) => {
    setLoading(true);
    try {
      const result = await getEarthAssetUseCase(lat, lon, date);
      setAsset(result);
    } catch (error) {
      console.error('Error fetching Earth Asset:', error);
    } finally {
      setLoading(false);
    }
  };

  return { asset, loading, fetchEarthAsset };
};
