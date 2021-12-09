import React, { useState } from "react";
import { View, Image, TextInput } from "react-native";
import { styles } from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import logoNet from "../../../assets/logoNet.png";
import Cep from "../../components/Cep";
import banner from "../../../assets/banner.png";
import olympikus from "../../../assets/olympikus.png";
import nike from "../../../assets/nike.png";
import basics from "../../../assets/basics.png";
import bola from "../../../assets/bola.png";
import homem from "../../../assets/homem.png";
import tenis from "../../../assets/tenis.png";
import outroTenis from "../../../assets/outroTenis.png";

export default function Home() {
  const [text, setText] = useState("");

  return (
    <>
      <View style={styles.topo}>
        <Image source={logoNet} style={styles.logo} />
        <View style={styles.search} >
        <Ionicons name="search" style={styles.searchIcon} size={28} />
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Buscar por"
          placeholderTextColor="#d2bcdb"
        />
        </View>
        <Cep />
      </View>
      <Image source={banner} style={styles.banner} resizeMode="contain" />
      <View style={styles.marcas}>
        <Image source={olympikus} resizeMode="center"/>
        <View style={styles.linhaMarca}/>
        <Image source={nike} resizeMode="center" />
        <View style={styles.linhaMarca}/>
        <Image source={basics} resizeMode="center" />
        <View style={styles.linhaMarca}/>
      </View>
      <View style={styles.produtos}>
        <Image source={bola} resizeMode="center" style={styles.imagens} />
        <Image source={homem} resizeMode="center" style={styles.imagens} />
      </View>
      <View style={styles.produtos}>
        <Image source={tenis} resizeMode="center" style={styles.imagens} />
        <Image source={outroTenis} resizeMode="center" style={styles.imagens} />
      </View>
    </>
  );
}
