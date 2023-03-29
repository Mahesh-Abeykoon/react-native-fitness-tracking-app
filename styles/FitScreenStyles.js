import { StyleSheet } from "react-native";

const FitScreenStyles = StyleSheet.create({
  image: {
    width: "100%",
    height: 370,
  },
  title: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  sets: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 38,
    fontWeight: "bold",
  },
  buttonContainer: {
    backgroundColor: "blue",
    width: 120,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  prevButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 80,
  },
  prevButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  skipButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 80,
  },
  skipButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default FitScreenStyles;
Add 