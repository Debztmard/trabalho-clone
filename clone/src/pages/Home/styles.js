import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: "21%",
    backgroundColor: "#5a2d82",
    paddingTop: 10,
  },
  logo: {
    width: null,
    height: null,
    padding: 20,
    resizeMode: "contain",
    paddingHorizontal: 100,
    marginBottom: 10,
  },
  input: {
    height: null,
    width: null,
    marginBottom: 15,
    padding: 5,
    backgroundColor: "#816b94",
    marginHorizontal: 10,
  },
  banner: {
    height: "21%",
    width: null,
    padding: 10,
    marginTop: 15,
  },
  marcas: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "space-around",
    borderRightWidth: 1,
    borderRightColor: "black",
  },
  produtos: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "space-around",
    marginHorizontal: null,
  },
  imagens: {
    height: "106%",
    width: "106%",
    marginVertical: 6,
    marginLeft: null,
    marginRight: null,
  },
});
