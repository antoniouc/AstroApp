import axios from "axios";
import { Asteroid } from "../../domain/entities/Asteroid";
import { API_NASA } from "../../core/Api";
import HttpClient from "../../core/AxiosSinggleton";
export class AsteroidApiService {
  private http = HttpClient.getInstance();
  private BASE_URL = "https://api.nasa.gov/neo/rest/v1/neo/browse";

  async getAsteroidsByDate(date: string): Promise<Asteroid[]> {
    const response = await this.http.get('/neo/rest/v1/feed',{
      params: {
        start_date: date,
        end_date: date,
      },
    });
    return response.data.near_earth_objects[date];
  }

  async getAsteroidById(id: string): Promise<Asteroid> {
    const response = await axios.get(
      `${this.BASE_URL}/neo/${id}?api_key=${API_NASA.API_KEY}`
    );
    return response.data;
  }
}