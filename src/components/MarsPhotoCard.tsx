import React from 'react';
import { Image, View, Text } from 'react-native';
import { MarsPhoto } from '../domain/entities/MarsPhoto';

export const MarsPhotoCard = ({ photo }: { photo: MarsPhoto }) => (
  <View style={{ marginBottom: 16 }}>
    <Image source={{ uri: photo.img_src }} style={{ height: 200, borderRadius: 12 }} />
    <Text>{photo.rover.name} - {photo.camera.full_name}</Text>
    {/* <Text>Fecha: {photo.earth_date}</Text> */}
  </View>
);
