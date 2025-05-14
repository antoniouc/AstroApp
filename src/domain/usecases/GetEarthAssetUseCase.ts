import { getEarthAsset } from '../repositories/EarthAssetsRepository';
import { EarthAsset } from '../entities/EarthAsset';

export const getEarthAssetUseCase = async (
  lat: number,
  lon: number,
  date: string
): Promise<EarthAsset> => {
  return await getEarthAsset(lat, lon, date);
};
