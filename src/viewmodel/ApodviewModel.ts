import { useEffect, useState } from 'react';
import { Apod } from '../domain/entities/Apod';
import { GetApodUseCase } from '../domain/usecases/GetApodUseCases';

export const useApodViewModel = (useCase: GetApodUseCase) => {
  const [apod, setApod] = useState<Apod | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    useCase.execute()
      .then(setApod)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { apod, loading, error };
};