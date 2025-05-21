import { NasaItem } from "../../domain/entities/NasaLibraryItem";
import { API_NASA } from "../../../../core/Api";
import axios from "axios";

export class NasaLibraryApiService {
    async getNasaLibrary(query: string, page = 1): Promise<NasaItem[]> {
        const url = `https://images-api.nasa.gov/search`;
        const response = await axios.get(url, {
            params: {
                q: query, media_type: 'image', page
            },
        });
        console.log("Response from NasaLibraryApiService:", response.data);
        return response.data.collection.items;
    }

    async getAssetByNasaId(nasaId: string): Promise<string | null> {
  const url = `https://images-api.nasa.gov/asset/${nasaId}`;
  const response = await axios.get(url);
  const items = response.data.collection.items;

  // Busca el primer .mp4
  const videoItem = items.find((item: any) =>
    item.href.endsWith('.mp4') || item.href.endsWith('.mov')
  );

  return videoItem ? videoItem.href : null;
}
}