import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Icons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.container}>
          <View style={{flex:2,}}>
            <Text style={{fontWeight: "bold", fontSize: 32}}>Hello , Devs</Text>
            <Text style={{fontSize: 12}}>15 tasks today</Text>
          </View>
          <View style={{flex:2,}}>
            <TouchableHighlight style={styles.ellipse}>
              <Image 
                style={styles.user}
                source={require('../assets/person.png')}
              />
            </TouchableHighlight>
          
          </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: 'center',
      width: 550,
      //fontFamily: 'lato'
    },
    ellipse:{
      width: 50,
      height: 50,
      backgroundColor: '#FFFFFF',
      borderRadius: 100,
    },
    user: {
      width:46,
      height: 45,
    }
  })