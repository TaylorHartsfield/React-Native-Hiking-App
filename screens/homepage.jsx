import { StyleSheet, Text, View, Image } from 'react-native';

export default function Homepage(){

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
      
    return(
<View style={styles.container}>
    <Text style={styles.header}>Hiking App for the
    <Text style={styles.gays}> Gays </Text>only</Text>
    <Image
        style={styles.pattieGonia}
        source={require('../assets/homepage/PattieGonia.webp')}>
    </Image>
</View>
    )
}

  