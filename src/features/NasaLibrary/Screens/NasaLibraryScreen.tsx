import React from 'react';
import { View, TextInput, Button, FlatList, Modal, TouchableOpacity, Text, Image } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNasaLibraryViewModel } from '../ViewModel/NasaLibraryViewModel';
import { NasaItemCard } from '../components/NasaItemCard';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NasaItem } from '../domain/entities/NasaLibraryItem';
import { mapNasaItemToCard } from '../data/Nasaitem.mapper';
import ImageViewer from 'react-native-image-zoom-viewer';
import NasaLibraryStack from '../../../navigation/NasaLibraryStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NasaLibraryStackParamList } from '../../../navigation/types/navigation';


type Props = NativeStackScreenProps<NasaLibraryStackParamList, 'NasaGallery'>;


type FormInputs = {
  query: string;
};

export const NasaLibraryScreen = ({navigation} : Props) => {
  

  const { control, handleSubmit, getValues } = useForm<FormInputs>(
    {
      defaultValues: {
        query: 'earth',
      },
    } as any
  );
  const { items, loading, searchItems, loadMore } = useNasaLibraryViewModel();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<NasaItem | null>(null);
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const { query } = data;
    searchItems(query);
  };

    React.useEffect(() => {
    searchItems('earth');
  }, []);
  
  function onPressitem(Item: any) {
    const mappedItem = mapNasaItemToCard(Item);
    setSelectedItem(mappedItem);
    setModalVisible(true);
  }

 
  return (
    <View style={{ padding: 16 }}>
      <Button title="Ver Favoritos" onPress={() => navigation.navigate('FavoritesNasa')} />

      <Controller
        control={control}
        name="query"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Buscar en NASA"
            value={value}
            onChangeText={onChange}
            style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
          />
        )}
      />
      <Button title="Buscar" onPress={handleSubmit(onSubmit)} />

      <FlatList
        data={items}
        renderItem={({ item }) => (
  
          <TouchableOpacity onPress={() => onPressitem(item)} style={{ flex: 1 / 3, margin: 2 }}>

            <NasaItemCard item={item}   />
             

          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${item.nasaId}_${index}`}

        onEndReached={() => loadMore(getValues("query"))}
        onEndReachedThreshold={0.5}
      />

<Modal visible={modalVisible} transparent={true} animationType="slide">
  <View style={styles.fullscreenModal}>
    {selectedItem?.mediaUrl && (
      <View style={styles.imageViewerContainer}>
        <ImageViewer
          imageUrls={[{ url: selectedItem.mediaUrl }]}
          enableSwipeDown
          onSwipeDown={() => setModalVisible(false)}
        />
      </View>
    )}

    <TouchableOpacity
      style={styles.closeButton}
      onPress={() => setModalVisible(false)}
    >
      <Ionicons name="close" size={24} color="black" />
    </TouchableOpacity>

    {selectedItem && (
      <View style={styles.textContainer}>
        <Text style={styles.modalText}>
          {selectedItem.title}{'\n\n'}
          {selectedItem.dateCreated}{'\n\n'}
          {selectedItem.description}
        </Text>
      </View>
    )}
  </View>
</Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  fullscreenModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.95)',
  },
  imageViewerContainer: {
    flex: 1,
  },
  textContainer: {
    padding: 16,
    backgroundColor: '#000',
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 20,
  },
});
