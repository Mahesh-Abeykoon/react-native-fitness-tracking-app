import { StyleSheet } from "react-native";

const FitScreenStyles = StyleSheet.create({
  workoutImage: {
    width: "100%",
    height: 370,
  },
  workoutName: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  workoutSets: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  doneButtonContainer: {
    backgroundColor: "blue",
    width: 120,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    borderRadius: 20,
    padding: 10,
  },
  doneButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  preButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50, 
  },
  prevButtonContainer: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 75,
  },
  prevButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:15,

  },
  skipButtonContainer: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    width: 75,
  },
  skipButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:15,

  },
});

export default FitScreenStyles;
