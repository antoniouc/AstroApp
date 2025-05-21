// This file defines the NasaItem interface, which represents an item in the NASA library.
// It includes properties such as nasaId, title, description, mediaType, thumbnailUrl, mediaUrl, and dateCreated.   
export interface NasaItem {
  nasaId: string;
  title: string;
  description?: string;
  mediaType: 'image' | 'video';
  thumbnailUrl: string; // Para mostrar en la galería
  mediaUrl?: string;    // Para reproducir o ver en pantalla completa
  dateCreated: string;
}