import { MarsPhoto } from "../entities/MarsPhoto";
import { MarsPhotoRepository } from "../repositories/MarsPhotoRepository";
// Clase que representa el caso de uso para obtener fotos de Marte
export class GetMarsPhotosUseCase {
  // Constructor que recibe un repositorio de fotos de Marte
  constructor(private marsPhotoRepository: MarsPhotoRepository) {}

  // Método que ejecuta la lógica para obtener fotos de Marte
  async execute(rover: string, date: string, camera?: string): Promise<MarsPhoto[]> {
    // Llama al repositorio para obtener las fotos y las devuelve
    return this.marsPhotoRepository.getPhotos(rover, date, camera);
  }
}

