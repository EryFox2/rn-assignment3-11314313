import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import LiIcons from '@expo/vector-icons/Ionicons';
import FontIcons from '@expo/vector-icons/FontAwesome'

export default function SearchBar() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <LiIcons 
            style={styles.search}
            name='search-outline'
            size={27}
          />
          <TextInput
            style={styles.input}
            placeholder='Search'
            placeholderTextColor='#000000'
          />
        </View>
        <TouchableHighlight style={styles.pad}>
          <LiIcons 
            style={styles.filter}
            name='options'
            size={37}
          />
        </TouchableHighlight>
      </View>  
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      margin: 5,
      width: '100%',
      height: '12%'
    },
    innerContainer: {
      flex: 5,
      flexDirection: "row",
      margin: 5,
      //width: "70%",
      height: 48,
      borderRadius: 14,
      borderWidth: 1,
      borderBlockColor: '#FBF9F7',
      borderLeftColor: '#FBF9F7',
      borderRightColor: '#FBF9F7',
      backgroundColor: '#FBF9F7',
    },
    search:{
      margin: 10,
      color: "#000000"
    },
    input:{
      //margin: 5,
      fontWeight: 'bold',
      fontSize: 16,
      color: "#000000",
    },
    pad:{
      flex: 1,
      marginLeft:10,
      marginRight: 10,
      width: 50,
      height: 48,
      borderRadius: 14,
      backgroundColor: '#F0522F',
    },
    filter:{
      margin: 5,
      color: '#FFFFFF',
      
    },
  });