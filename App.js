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
        {/* Setting defaults navigation styles to all regitred screens */}
        <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor:'#351401'},
            headerTintColor:'white',
            contentStyle:{backgroundColor:'#3f2f25'} //content background
        }}>
          {/* this create a navigation screen
          navigation can be configurated
          :)*/}
          <Stack.Screen 
            name="MealsCategories" // id
            component={CategoriesScreen}//conecting to a screen . passing navigation ?
            options= {{
              title:'Meals Categories'
            }}
          />
          {/* a second screen*/}
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            //options as a function dinamic
            /* options={({route, navigation}) => {
              const catId = route.params.categoryId;// in MealsOverviewScreen
              return{
                title:catId
              };
            }} */
          />

        </Stack.Navigator>
       </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
