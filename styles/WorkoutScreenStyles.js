import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  image: {
    width: '100%',
    height: 200,
  },
  backButtonText: {
    fontSize: 35,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    color:"#ffff", 
    fontSize: 25,
    fontWeight: '600'
  },
  pressable: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    width: 90,
    height: 90,
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    width: 170,
  },
  sets: {
    marginTop: 4,
    fontSize: 16,
    color: 'gray',
  },
  checkIcon: {
    marginLeft: 70,
    fontSize:30,
    color:"green"
  },
  startButton: {
    backgroundColor: '#005580',
    padding: 10,
    borderRadius: 2,
    marginVertical: 5,
    width: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  startButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
