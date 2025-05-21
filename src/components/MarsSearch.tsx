import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface MarsSearchProps {
  onSearch: (rover: string, date: string, camera?: string) => void;
}

export const MarsSearch = ({ onSearch }: MarsSearchProps) => {
  const [rover, setRover] = useState('curiosity');
  const [date, setDate] = useState('2012-08-06');
  const [camera, setCamera] = useState('');

  const roverMissionDates: Record<string, { start: string; end: string }> = {
    curiosity: { start: "2012-08-06", end: "Presente" },
    opportunity: { start: "2004-01-25", end: "2018-06-10" },
    spirit: { start: "2004-01-04", end: "2010-03-21" },
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold' }}>Selecciona Rover:</Text>
      <Picker selectedValue={rover} onValueChange={setRover}>
        <Picker.Item label="Curiosity" value="curiosity" />
        <Picker.Item label="Opportunity" value="opportunity" />
        <Picker.Item label="Spirit" value="spirit" />
      </Picker>
       <Text style={{ fontWeight: 'bold' }}>
    Misión de {rover.charAt(0).toUpperCase() + rover.slice(1)}:
  </Text>
  <Text style={{ marginTop: 4 }}>
    {roverMissionDates[rover].start} → {roverMissionDates[rover].end}
  </Text>
      <Text style={{ fontWeight: 'bold' }}>Fecha (YYYY-MM-DD):</Text>
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="2021-01-01"
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 8,
          marginVertical: 8
        }}
      />

      <Text style={{ fontWeight: 'bold' }}>Cámara (opcional):</Text>
      <TextInput
        value={camera}
        onChangeText={setCamera}
        placeholder="fhaz, rhaz, mast, etc."
        style={{
          borderWidth: 1,
          borderRadius: 8,
          padding: 8,
          marginBottom: 12
        }}
      />

      <Button title="Buscar" onPress={() => onSearch(rover, date, camera || undefined)} />
    </View>
  );
};
