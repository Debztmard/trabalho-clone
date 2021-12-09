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
  search:{
    flexDirection: "row",
  },
  searchIcon:{
    height: 37.5,
    color: "#d2bcdb",
    backgroundColor: "#816b94",
    marginLeft: 10,
    paddingVertical: 4,
    paddingLeft: 4,
  },
  input: {
    height: null,
    width: "88%",
    marginBottom: 15,
    padding: 5,
    backgroundColor: "#816b94",
    
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
    
  },
  linhaMarca:{
    height: "100%",
    width: 2,
    backgroundColor: "#b5b5b5",
    marginTop: 5,
    marginRight: 5,
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
