import axios from 'axios';
import { Apod } from '../../domain/entities/Apod';
import { API_NASA,  } from '../../core/Api';

export class ApodApiService {
  private BASE_URL = 'https://api.nasa.gov/planetary/apod';
  // reemplaza con tu API key si tienes una

  async fetchApod(): Promise<Apod> {
    const response = await axios.get(`${this.BASE_URL}?api_key=${API_NASA.API_KEY}`);
    return response.data;
  }
}