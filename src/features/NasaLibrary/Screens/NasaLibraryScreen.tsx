import React from 'react';
import { View, TextInput, Button, FlatList } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNasaLibraryViewModel } from '../ViewModel/NasaLibraryViewModel';
import { NasaItemCard } from '../components/NasaItemCard';
import MasonryList from '@react-native-seoul/masonry-list';
type FormInputs = {
  query: string;
};

export const NasaLibraryScreen = () => {
  const { control, handleSubmit, getValues } = useForm<FormInputs>();
  const { items, loading, searchItems, loadMore } = useNasaLibraryViewModel();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    searchItems(data.query);
  };

  return (
    <View style={{ padding: 16 }}>
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
        renderItem={({ item }) => <NasaItemCard item={item } />}
        keyExtractor={(item, index) => `${item.nasaId}_${index}`}

        onEndReached={() => loadMore(getValues("query"))}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};
