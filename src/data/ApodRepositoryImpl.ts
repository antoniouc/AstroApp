import { ApodRepository } from '../domain/repositories/ApodRepository';
import { Apod } from '../domain/entities/Apod';
import { ApodApiService } from './remote/ApodApiService';

export class ApodRepositoryImpl implements ApodRepository {
  constructor(private apiService: ApodApiService) {}

  async getApod(): Promise<Apod> {
    return await this.apiService.fetchApod();
  }
}