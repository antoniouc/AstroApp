import axios from 'axios';
import { Apod } from '../../domain/entities/Apod';

export class ApodApiService {
  private BASE_URL = 'https://api.nasa.gov/planetary/apod';
  private API_KEY = 'uTE1q2Bg4Evm6AaTg3R4KztXTDSGEnfyHhlIJ2rA'; // reemplaza con tu API key si tienes una

  async fetchApod(): Promise<Apod> {
    const response = await axios.get(`${this.BASE_URL}?api_key=${this.API_KEY}`);
    return response.data;
  }
}