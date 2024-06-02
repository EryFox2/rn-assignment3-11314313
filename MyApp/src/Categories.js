import { StyleSheet, Text, View } from 'react-native';
import Icons from '@expo/vector-icons/Ionicons';

export default function Categories() {
    return (
        <View style={styles.container}>
          <Text style={{fontWeight: "bold", fontSize: 20,}}>Categories</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });