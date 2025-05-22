import { NasaItem } from "../domain/entities/NasaLibraryItem";
 export function mapNasaItemToCard(item: any): NasaItem {
    const data = item.data[0];
    const mediaType = data.media_type;
    const title = data.title;
    const imageUrl = item.links?.[0]?.href;
    const thumbnailUrl = item.links?.[0]?.href;
    const dateCreated = data.date_created;
    
    return {
        nasaId: item.nasaId,
        title: title,
        description: data.description,
        mediaType: mediaType,
        thumbnailUrl: thumbnailUrl,
        mediaUrl: imageUrl,
        dateCreated: dateCreated,
    };
 }
 