import { MarsPhotoRepository } from '../domain/repositories/MarsPhotoRepository';
import { MarsPhotoApiService } from '../data/remote/MarsPhotoApiService';
import { MarsPhoto } from '../domain/entities/MarsPhoto';

export class MarsPhotoRepositoryImpl implements MarsPhotoRepository {
  constructor(private api: MarsPhotoApiService) {}

  async getPhotos(rover: string, date: string, camera?: string): Promise<MarsPhoto[]> {
    return this.api.getPhotos(rover, date, camera);
  }
}
