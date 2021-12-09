import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts, Raleway_400Regular, Raleway_700Bold } from "@expo-google-fonts/raleway";
import { StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./src/pages/Home";
import Categorias from "./src/pages/Categorias";
import Carrinho from "./src/pages/Carrinho";
import ListaDesejos from "./src/pages/ListaDesejos";
import Conta from "./src/pages/Conta";

const Tab = createBottomTabNavigator();

export default function App() {

  const [fonteCarregada] = useFonts({
    RalewayRegular: Raleway_400Regular,
    RalewayBold: Raleway_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#401d61' barStyle='light-content'/>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home-outline" : "home-outline";
            } else if (route.name === "Categorias") {
              iconName = focused ? "list" : "list";
            } else if (route.name === "Carrinho") {
              iconName = focused ? "cart-outline" : "cart-outline";
            } else if (route.name === "Lista de Desejos") {
              iconName = focused ? "heart-outline" : "heart-outline";
            } else if (route.name === "Conta") {
              iconName = focused ? "person-outline" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#816b94",
          tabBarInactiveTintColor: "#d0d0d0",
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categorias" component={Categorias} />
        <Tab.Screen name="Carrinho" component={Carrinho} />
        <Tab.Screen name="Lista de Desejos" component={ListaDesejos} />
        <Tab.Screen name="Conta" component={Conta} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
