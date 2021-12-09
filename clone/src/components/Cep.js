import React from "react";
import { View, StyleSheet } from "react-native";
import Texto from "./Texto";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Cep() {
  return (
    <View style={styles.barra}>
      <Ionicons name="location-outline" style={styles.iconLocal} size={30} />
      <Texto style={styles.titulo}>Informe seu CEP</Texto>
      <Ionicons name="chevron-forward" style={styles.iconSeta} size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#401d61",
  },
  titulo: {
    color: "white",
    paddingVertical: 12,
    marginRight: 10,
  },
  iconLocal: {
    paddingVertical: 8,
    color: "white",
    marginHorizontal: 10,
  },
  iconSeta: {
    paddingVertical: 8,
    color: "white",
    paddingHorizontal: "47%",
  },
});
