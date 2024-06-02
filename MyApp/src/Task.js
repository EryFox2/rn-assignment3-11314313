import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';

const App = () => {
  const data = [
    { key: "1", text: "Mobile App Development" },
    { key: "2", text: "Web Development" },
    { key: "3", text: "Push Ups" },
    { key: "4", text: "Reading Books" },
    { key: "5", text: "Writing Blog Posts" },
    { key: "6", text: "Running" },
    { key: "7", text: "Learning React Native" },
    { key: "8", text: "Practicing Yoga" },
    { key: "9", text: "Cooking" },
    { key: "10", text: "Meditation" },
    { key: "11", text: "Gardening" },
    { key: "12", text: "Learning Guitar" },
    { key: "13", text: "Studying Data Structures" },
    { key: "14", text: "Working on Open Source" },
    { key: "15", text: "Designing UI/UX" }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ongoing Task</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#F7F0E8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  flatListContent: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 130,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemText: {
    fontSize: 18,
    color: 'black',
  },
});

export default App;
