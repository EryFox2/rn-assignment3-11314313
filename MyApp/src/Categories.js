import React from 'react';
import { FlatList, Text, StyleSheet, View, Image } from 'react-native';

const App = () => {
  const data = [
    { key: "1", title: "Assignment", tasks: "1 Tasks", image: require('../assets/exercise.png') },
    { key: "2", title: "Study", tasks: "1 Tasks", image: require('../assets/study.png') },
    { key : "3", title : "Lectures", tasks: "1 Tasks", image: require('../assets/speaker.png') },
    { key : "4", title : "Meals", tasks: "1 Tasks", image: require('../assets/dinner.png') },
    { key : "5", title : "Workouts", tasks: "1 Tasks", image: require('../assets/treadmill-machine.png') }, 
    { key : "6", title : "Chorse", tasks: "1 Tasks", image: require('../assets/house.png') },
    { key : "7", title : "Entertainment", tasks: "1 Tasks", image: require('../assets/serie.png') }, 
    { key : "8", title : "Hygeine", tasks: "1 Tasks", image: require('../assets/bath.png') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.tasks}>{item.tasks}</Text>
        <Image source={item.image} style={styles.image} />
      
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatListContent}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '30%',
    paddingTop: 30,
    backgroundColor: '#F7F0E8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  flatListContent: {
    paddingLeft: 20,
  },
  itemContainer: {
    width: 190,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    marginRight: 20,
    alignItems: 'center',
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
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    //textAlign: 'right',
  },
  tasks: {
    fontSize: 12,
    color: 'gray',
    //alignContent: 'left',
  },
});

export default App;