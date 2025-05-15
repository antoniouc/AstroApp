// Importa la interfaz Apod desde la capa de entidades
import { Apod } from "../entities/Apod";

// Interfaz que define el contrato para un repositorio de APOD 
export interface ApodRepository {
   // Obtiene la Astronomy Picture of the Day (APOD) desde una fuente de datos
  getApod(): Promise<Apod>;
}