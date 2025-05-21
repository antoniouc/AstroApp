import React, { useState } from 'react';
import { ScrollView, View, Text, ActivityIndicator, FlatList, TouchableOpacity, Modal, Image, Button } from 'react-native';
import { MarsPhotoCard } from '../components/MarsPhotoCard';
import { MarsPhotoApiService } from '../data/remote/MarsPhotoApiService';
import { MarsPhotoRepositoryImpl } from '../data/MarsPhotoRepositoryImpl';
import { GetMarsPhotosUseCase } from '../domain/usecases/MarsPhotoUseCases';
import { useMarsPhotoViewModel } from '../viewmodel/MarsPhotoViewModel';
import { MarsSearch } from '../components/MarsSearch';
import { MarsPhoto } from '../domain/entities/MarsPhoto';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const MarsGallery = () => {
  const api = new MarsPhotoApiService();
  const repo = new MarsPhotoRepositoryImpl(api);
  const useCase = new GetMarsPhotosUseCase(repo);

  const [rover, setRover] = useState('curiosity');
  const [date, setDate] = useState('2012-08-06');
  const [camera, setCamera] = useState<string | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<MarsPhoto | null>(null);
  const handleSearch = (rover: string, date: string, camera?: string) => {
    setRover(rover);
    setDate(date);
    setCamera(camera);
  };

  function onPhotoPress(photo: MarsPhoto) {
    setSelectedPhoto(photo);
    setModalVisible(true);
  }

  const { photos, loading } = useMarsPhotoViewModel(useCase, rover, date, camera);

  return (
    <>
      <MarsSearch onSearch={handleSearch} />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPhotoPress(item)} style={{ flex: 1 / 3, margin: 2 }}>
              <MarsPhotoCard
                photo={item}
              />
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text>No hay fotos para esta configuración</Text>}
        />
      )}


      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Ionicons
              name="close-circle-outline"
              size={24}
              color="white"
            />
            {/* <Text style={styles.buttonText}>Cerrar</Text> */}
          </TouchableOpacity>
          {selectedPhoto && (
            <>
              <Image source={{ uri: selectedPhoto.img_src }} style={{ width: '100%', height: 300, resizeMode: 'contain' }} />
              <Text style={{ color: '#fff', marginTop: 10 }}>
                Rover: {selectedPhoto.rover.name}{"\n"}
                Cámara: {selectedPhoto.camera.full_name}{"\n"}
                Fecha: {selectedPhoto.earth_date}
              </Text>
            </>
          )}
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    padding: 20,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: '#fff',
    marginBottom: 20,
  },
  closeButton: {
  
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: 20,
top: 100,
  marginBottom: 20,
   
  paddingVertical: 12,             // Espacio vertical
  paddingHorizontal: 30,           // Espacio horizontal
  borderRadius: 20,                // Bordes redondeados
  borderWidth: 2,                  // Borde
  // borderColor: '#cc0000',          // Color del borde
  elevation: 5,                    // Sombra 
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
