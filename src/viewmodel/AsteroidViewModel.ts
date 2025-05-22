
// features/neo/viewmodel/AsteroidViewModel.ts
import { useEffect, useState } from "react";
import { GetAsteroidUseCase } from "../domain/usecases/GetAsteroidUseCases";
import { Asteroid } from "../domain/entities/Asteroid";
import { Observable } from "../core/observer/observer";

export const asteroidObservable = new Observable<Asteroid[]>();

export function useAsteroidViewModel(useCase: GetAsteroidUseCase, date: string) {
  const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    useCase.execute(date).then(data => {
      setAsteroids(data);
      asteroidObservable.notify(data); // 🔔 Notifica a quien esté escuchando
      setLoading(false);
    });
  }, [date]);

  return { asteroids, loading };
}