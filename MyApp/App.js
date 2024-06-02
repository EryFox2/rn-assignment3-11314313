import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import SearchBar from './src/SearchBar';
import Categories from './src/Categories';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={styles.container}>
            <Header />
            <SearchBar />
            <Categories />
          </View>
        </ScrollView>
      </SafeAreaView> 
    </SafeAreaProvider>
      
      
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F0E8'
  },
});
