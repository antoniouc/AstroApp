import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../../store/slices/FavoriteSliceLibrary';
import { RootState } from '../../../store/indexStore';
import { NasaItem } from '../domain/entities/NasaLibraryItem';
export const NasaItemCard = ({ item }: { item: any }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  // Detecta si es un item plano (favorito) o un item original (de la API)
  const isFromFavorites = !item.data;

  // Extrae valores según el tipo de item
  const data = isFromFavorites ? item : item.data?.[0];
  const mediaType = data?.mediaType || data?.media_type;
  const title = data?.title;
  const imageUrl = item.mediaUrl || item.links?.[0]?.href;
  const nasaId = data?.nasaId || data?.nasa_id;

  const isFavorite = favorites.some(fav => fav.nasaId === nasaId);

  const toggleFavorite = () => {
    const favoriteItem: NasaItem = {
      nasaId,
      title,
      description: data?.description,
      dateCreated: data?.dateCreated || data?.date_created,
      mediaType,
      mediaUrl: imageUrl,
      thumbnailUrl: item.thumbnailUrl || item.links?.[0]?.href,
    };

    if (isFavorite) {
      dispatch(removeFavorite(favoriteItem));
    } else {
      dispatch(addFavorite(favoriteItem));
    }
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
        <Ionicons
          name={isFavorite ? 'heart' : 'heart-outline'}
          size={30}
          color="red"
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      {mediaType === 'image' && imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <Text style={styles.errorText}>No se puede mostrar este contenido.</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  title: {
    padding: 6,
    fontWeight: 'bold',
    fontSize: 14,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  errorText: {
    padding: 8,
    color: 'gray',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 20,
  },
});
