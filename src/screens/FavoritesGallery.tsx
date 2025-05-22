import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/indexStore';
import { NasaItemCard } from '../features/NasaLibrary/components/NasaItemCard';

export const FavoritesScreen = () => {
  const favorites = useSelector((state: RootState) => state.favorites.items);

  return (
    <View style={{ flex: 1, padding:  1}}>
      {favorites.length === 0 ? (
        <Text>No hay favoritos aún.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.nasaId}
          renderItem={({ item }) => <NasaItemCard item={item} />}
        />
      )}
    </View>
  );
};