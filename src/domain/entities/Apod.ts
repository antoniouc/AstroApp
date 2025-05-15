// Interfaz que representa un objeto del Astronomy Picture of the Day (APOD) de la NASA
export interface Apod {
  // Título de la imagen/video astronómico
  title: string;
  // Explicación detallada del contenido 
  explanation: string;
  // URL de la imagen o video 
  url: string;
  // Fecha asociada al contenido en formato ISO (YYYY-MM-DD)
  date: string;
  // Tipo de contenido: "image" para fotos, "video" para material audiovisual
  media_type: string;
}
