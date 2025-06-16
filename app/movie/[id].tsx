

import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function Details () {
    const { id } = useLocalSearchParams();
  return (
    <Text>Movie Id: {id}</Text>
  );
}
