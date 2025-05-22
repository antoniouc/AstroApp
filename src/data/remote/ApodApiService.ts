import HttpClient from '../../core/AxiosSinggleton';
import { Apod } from '../../domain/entities/Apod';
import { API_NASA,  } from '../../core/Api';

export class ApodApiService {
  private http = HttpClient.getInstance();
  private BASE_URL = 'https://api.nasa.gov/planetary/apod';
  // reemplaza con tu API key si tienes una

  async fetchApod(): Promise<Apod> {
    const response = await this.http.get(`${API_NASA.BASE_URL_APOD}`);
    return response.data;
  }
}