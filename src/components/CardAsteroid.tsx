// src/features/neo/NeoCard.tsx
import { View, Text, StyleSheet } from 'react-native';
import { Asteroid } from '../domain/entities/Asteroid';

export const NeoCard = ({ asteroid }: { asteroid: Asteroid }) => {
  return (
    <View style={styles.card}>
      <Text  style={styles.name}>☄️ {asteroid.name}</Text>
      <Text>💀 Peligroso: {asteroid.is_potentially_hazardous_asteroid ? 'Sí 🔴' : 'No 🟢'}</Text>
      <Text>📏 Diámetro estimado (km): {asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}</Text>
      <Text>🚀 Velocidad (km/h): {asteroid.close_approach_data?.[0]?.relative_velocity.kilometers_per_hour ?? 'no disponible'}</Text>
      <Text>Distancia (km): {asteroid.close_approach_data?.[0]?.miss_distance.kilometers ?? 'no disponible'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#0740f0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
        width: 1,
        height: 2,
    }
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
