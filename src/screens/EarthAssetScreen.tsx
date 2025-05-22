import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Pressable, Platform } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useEarthAssetViewModel } from '../viewmodel/useEarthAssetViewModel';

const EarthAssetScreen = () => {
  const { asset, loading, fetchEarthAsset } = useEarthAssetViewModel();
  const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {
      lat: '19.4326',
      lon: '-99.1332',
      date: new Date('2023-01-01'),
    }
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const selectedDate = watch('date');

  const onSubmit = (data: any) => {
    const { lat, lon, date } = data;
    const formattedDate = date.toISOString().split('T')[0];
    fetchEarthAsset(parseFloat(lat), parseFloat(lon), formattedDate);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Latitud:</Text>
      <Controller
        control={control}
        name="lat"
        rules={{ required: true, pattern: /^[0-9.-]+$/ }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
          />
        )}
      />
      {errors.lat && <Text style={{ color: 'red' }}>Latitud inválida</Text>}

      <Text>Longitud:</Text>
      <Controller
        control={control}
        name="lon"
        rules={{ required: true, pattern: /^[0-9.-]+$/ }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth: 1, marginBottom: 5, padding: 5 }}
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
          />
        )}
      />
      {errors.lon && <Text style={{ color: 'red' }}>Longitud inválida</Text>}

      <Text>Fecha:</Text>
      <Pressable onPress={() => setShowDatePicker(true)}>
        <Text style={{
          borderWidth: 1, padding: 10, marginBottom: 10,
          backgroundColor: '#f0f0f0'
        }}>
          {selectedDate.toISOString().split('T')[0]}
        </Text>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) setValue('date', date);
          }}
        />
      )}

      <Button title="Buscar imagen satelital" onPress={handleSubmit(onSubmit)} />

      {asset && (
        <View style={{ marginTop:  10}}>
          <Image source={{ uri: asset.url }} style={{ width: 300, height: 300 }} />
          <Text>📍 {asset.lat}, {asset.lon}</Text>
          <Text>📅 {asset.date}</Text>
        </View>
      )}
    </View>
  );
};

export default EarthAssetScreen;
