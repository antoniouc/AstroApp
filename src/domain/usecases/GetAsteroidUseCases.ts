import { Asteroid } from "../entities/Asteroid";
import { AsteroidRepository } from "../repositories/AsteroidRepository";

export class GetAsteroidUseCase {
    constructor(private readonly asteroidRepository: AsteroidRepository) {}
    async execute(date: string): Promise<Asteroid[]> {
        return this.asteroidRepository.getAsteroidsByDate(date);
    }       
}