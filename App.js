import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
    // npm install @react-navigation/native
    // npx expo install react-native-screens react-native-safe-area-context
import { createNativeStackNavigator } from '@react-navigation/native-stack';
    // npx expo install @react-navigation/native-stack

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='MealsCategories'
          screenOptions={{
              title: "All Categories",
              headerStyle: { backgroundColor: '#082408' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#175217' }
            }} 
        >
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoriesScreen}
            // INSTEAD SET THE OPTIONS ON STACK.NAVIGATOR
            // options={{
            //   title: "All Categories",
            //   headerStyle: { backgroundColor: '#082408' },
            //   headerTintColor: 'white',
            //   contentStyle: { backgroundColor: '#175217' }
            // }} 
          />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverviewScreen} 
            // INSTEAD SET THE OPTIONS IN THE MEALS OVERVIEW SCREEN COMPONENT
            // options={ ({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   }
            // }}   
          />
          <Stack.Screen 
            name='MealDetails' 
            component={MealDetailsScreen} 
            // INSTEAD SET THE OPTIONS IN THE MEALS OVERVIEW SCREEN COMPONENT
            // options={ ({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   }
            // }}   
          />
        </Stack.Navigator>  
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  
});
