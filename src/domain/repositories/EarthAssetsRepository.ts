import axios from 'axios';
import { earthAssetFactory } from '../../core/factories/earthAssetFactory';
import { EarthAsset } from '../entities/EarthAsset';

const API_KEY = 'uTE1q2Bg4Evm6AaTg3R4KztXTDSGEnfyHhlIJ2rA';

export const getEarthAsset = async (lat: number, lon: number, date: string): Promise<EarthAsset> => {
  const response = await axios.get('https://api.nasa.gov/planetary/earth/assets', {
    params: { lat, lon, date, dim: 0.1, api_key: API_KEY },
  });
  
  return earthAssetFactory({ ...response.data, lat, lon, date });
};
