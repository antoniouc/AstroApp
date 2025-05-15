import { useEffect, useState } from "react";
import { Asteroid } from "../domain/entities/Asteroid";
import { GetAsteroidUseCase } from "../domain/usecases/GetAsteroidUseCases";


export const useAsteroidViewModel = (useCase: GetAsteroidUseCase, date: string) => {
    
    const [asteroids, setAsteroids] = useState<Asteroid[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        useCase.execute(date)
        .then(setAsteroids)
        .catch((e) => setError(e.message))
        .finally(() => setLoading(false));
    }, [date]);

    return { asteroids, loading, error };
}