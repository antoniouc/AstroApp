import { AsteroidRepository } from "../domain/repositories/AsteroidRepository";
import { Asteroid } from "../domain/entities/Asteroid";

export class AsteroidRepositoryImpl implements AsteroidRepository {
    constructor(private apiservice: AsteroidRepository) {}

    async  getAsteroidsByDate(date: string): Promise<Asteroid[]> {
        return await this.apiservice.getAsteroidsByDate(date);
    }
    async getAsteroidById(id: string): Promise<Asteroid> {
        return await this.apiservice.getAsteroidById(id);
    }
}