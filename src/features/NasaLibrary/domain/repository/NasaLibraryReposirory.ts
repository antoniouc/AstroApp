import { NasaItem } from "../entities/NasaLibraryItem";

// Interfaz que define el contrato para un repositorio de la biblioteca de la NASA
export interface NasaLibraryRepository {
  // Obtiene una lista de elementos de la biblioteca de la NASA
  getNasaLibraryItems(query: string, page?: number): Promise<NasaItem[]>;
  
}