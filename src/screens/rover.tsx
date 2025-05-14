import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Product = {
  idProducto: string;
  name: string;
  price: number;
};

const products: Product[] = [
  { idProducto: "1", name: "Camisa React", price: 299 },
  { idProducto: "2", name: "Taza Expo", price: 149 },
  { idProducto: "3", name: "Sticker TypeScript", price: 49 },
];



export default function RoverScreen() {
  

  return (
  <SafeAreaView>
      <Text style={{ fontSize: 24, marginBottom: 12 }}>roverscreen</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.idProducto}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 12,
              borderBottomWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
</SafeAreaView>
  );
}
