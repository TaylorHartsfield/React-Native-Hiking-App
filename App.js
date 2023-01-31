import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './screens/homepage';

export default function App() {
  return (
    <NavigationContainer>
    <Homepage />
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gays:{
    fontSize: 36,
    fontWeight: 'bold',
    color:'purple',
   
  },
  header:{
    paddingTop: 53,
    paddingBottom: 30,
    justifyContent:'space-around',
    flex: 1,
    fontSize: 20,
  },

  pattieGonia:{
    height: 800,
    width: 400,
    marginBottom: 20
  }
});
