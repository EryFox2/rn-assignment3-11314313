import { StyleSheet, Text, View } from 'react-native';
import Icons from '@expo/vector-icons/Ionicons';

export default function Tasks() {
    return (
        <View style={styles.container}>
          <Text>Hello World</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });