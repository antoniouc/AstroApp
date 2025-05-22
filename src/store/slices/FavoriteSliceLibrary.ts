import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NasaItem } from '../../features/NasaLibrary/domain/entities/NasaLibraryItem';

interface FavoritesState {
  items: NasaItem[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favoritesLibrary',
  initialState,
  reducers: {
addFavorite: (state, action: PayloadAction<NasaItem>) => {
  const exists = state.items.some(item => item.nasaId === action.payload.nasaId);
  if (!exists) {
    state.items.push(action.payload);
  }
},
    removeFavorite: (state, action: PayloadAction<NasaItem>) => {
      state.items = state.items.filter(item => item.nasaId !== action.payload.nasaId);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
