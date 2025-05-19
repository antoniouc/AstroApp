import { MarsPhoto } from '../entities/MarsPhoto';
// Interfaz que define el contrato para un repositorio de fotos de Marte
export interface MarsPhotoRepository {
  getPhotos(rover: string, date: string, camera?: string): Promise<MarsPhoto[]>;
}