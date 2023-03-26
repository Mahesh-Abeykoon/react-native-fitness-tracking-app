import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  header: {
    backgroundColor: "#0f5b8e",
    padding: 15,
    height: 150,
    width: "100%",
  },
  headerText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 22,
  },
  metricContainer: {
    alignItems: "center",
  },
  metricText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  metricLabel: {
    fontSize: 16,
    marginTop: 6,
  },
});
