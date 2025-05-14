import { Apod } from "../entities/Apod";
export interface ApodRepository {
  getApod(): Promise<Apod>;
}