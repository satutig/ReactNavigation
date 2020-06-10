import 'react-native-gesture-handler';

import * as React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {

  navigateToScreen=()=>{

    navigation.navigate('Next', {
      id: 100,
      name: 'Satuti',
      data: 'Satuti Nitin'
    });
  }

  return (
    <View style={styles.MainContainer}>

      <Text style={styles.text}> Home Screen </Text>

      <Button onPress={this.navigateToScreen} title="Go to Next" />

    </View>
  );
}

function SecondScreen({route, navigation}) {

  const { id } = route.params;
  const { name } = route.params;
  const { data } = route.params;

  return (
    <View style={styles.MainContainer}>

    <Text style={styles.text}> Values set on next screen passed from Home </Text>

      <Text style={styles.text}> ID = {id} </Text>

      <Text style={styles.text}> Name = {name} </Text>

      <Text style={styles.text}> Data = {data} </Text>

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator

      >

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Next" component={SecondScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  text: {
    textAlign: 'center',
    margin: 12,
    fontSize: 22,
    fontWeight: "100",
  },
 
});

export default App;