import { Asteroid } from "../entities/Asteroid";

export interface AsteroidRepository {
    // Obtiene una lista de asteroides desde una fuente de datos
   getAsteroidsByDate(date: string): Promise<Asteroid[]>;
    // Obtiene un asteroide por su ID desde una fuente de datos
    getAsteroidById(id: string): Promise<Asteroid>;
    
}