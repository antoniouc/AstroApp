import React from 'react';
import { Image, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';


export const NasaItemCard = ({ item }: { item: any }) => {
  const data = item.data[0];
  const mediaType = data.media_type;
  const title = data.title;
  const imageUrl = item.links?.[0]?.href;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      {mediaType === 'image' && imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} key="image"/>
      ): (
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
    aspectRatio: 1, // puedes cambiar a 4/3 o dejar dinámico
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  errorText: {
    padding: 8,
    color: 'gray',
  },
});