import { useState } from 'react';
import { NasaLibraryApiService } from '../data/Remote/NasaLibraryAPiService';
import { NasaItem } from '../domain/entities/NasaLibraryItem';

export const useNasaLibraryViewModel = () => {
  const [items, setItems] = useState<NasaItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const apiService = new NasaLibraryApiService();

  const searchItems = async (query: string) => {
    setLoading(true);
    const results = await apiService.getNasaLibrary(query, 1);
    setItems(results);
    setPage(2);
    setLoading(false);
  };

  const loadMore = async (query: string) => {
    setLoading(true);
    const results = await apiService.getNasaLibrary(query, page);
    setItems((prev) => [...prev, ...results]);
    setPage((p) => p + 1);
    setLoading(false);
  };

  return { items, loading, searchItems, loadMore };
};