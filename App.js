import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';//navigation

import { NavigationContainer } from '@react-navigation/native';//navigation

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';


const Stack = createNativeStackNavigator(); // a object with two properties


export default function App() {
  return (
    <>  
      <StatusBar style = 'dark'/>
       <NavigationContainer>
        <Stack.Navigator>
          {/* this create a navigation screen :)*/}
          <Stack.Screen 
            name="MealsCategories" // id
            component={CategoriesScreen}//conecting to a screen . passing navigation ?
          />
          {/* a second screen*/}
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
          />

        </Stack.Navigator>
       </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
