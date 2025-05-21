import { NasaLibraryRepository } from "../domain/repository/NasaLibraryReposirory";
import { NasaLibraryApiService } from "./Remote/NasaLibraryAPiService";
import { NasaItem } from "../domain/entities/NasaLibraryItem";

export class NasaLibraryRepositoryImpl implements NasaLibraryRepository {
    constructor(private api: NasaLibraryApiService) {}
    
  async getNasaLibraryItems(query: string, page = 1): Promise<NasaItem[]> {
    return await this.api.getNasaLibrary(query, page);
  }
}
