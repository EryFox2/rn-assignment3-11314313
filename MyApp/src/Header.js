import { StyleSheet, Text, View } from 'react-native';
import Icons from '@expo/vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.container}>
          <View style={{flex:1,}}>
            <Text style={{fontWeight: "bold", fontSize: 32}}>Hello , Devs</Text>
            <Text style={{fontSize: 12}}>15 tasks today</Text>
          </View>
          <View style={{flex:1,}}>
            <Icons name='person-circle' size={50}/>
          </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
    },
  })