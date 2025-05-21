import { NasaItem } from "../entities/NasaLibraryItem";
import { NasaLibraryRepository } from "../repository/NasaLibraryReposirory";
// Clase que representa el caso de uso para obtener fotos o videos de la NASA
export class SearchNasaLibraryUseCase {
  // Constructor que recibe un repositorio de la biblioteca de la NASA
  constructor(private nasaLibraryRepository: NasaLibraryRepository) {}

  // Método que ejecuta la lógica para buscar fotos o videos de la NASA
  async execute(query: string, page: number): Promise<NasaItem[]> {
    // Llama al repositorio para buscar los elementos y los devuelve
    return this.nasaLibraryRepository.getNasaLibraryItems(query, page);
  }
}