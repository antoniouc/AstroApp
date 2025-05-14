import { Apod } from "../entities/Apod";
import { ApodRepository } from "../repositories/ApodRepository";

export class GetApodUseCase {
  constructor(private apodRepository: ApodRepository) {}

  async execute(): Promise<Apod> {
    return this.apodRepository.getApod();
  }
}