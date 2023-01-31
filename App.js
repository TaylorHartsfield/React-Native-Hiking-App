import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hiking App for the
      <Text style={styles.gays}> Gays </Text>
      only</Text>
      <Image
        style={styles.pattieGonia}
        source={require('./assets/PattieGonia.webp')}>
      </Image>
      <StatusBar style="auto" />
    </View>
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
    paddingTop: 60,
    paddingBottom: 20,
    justifyContent:'space-around',
    flex: 1,
    fontSize: 20,
  },
  
  pattieGonia:{
    height: 800,
    width: 400
  }
});
