import { StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
    // npm install @react-navigation/native
    // npx expo install react-native-screens react-native-safe-area-context
import { createNativeStackNavigator } from '@react-navigation/native-stack';
    // npx expo install @react-navigation/native-stack
import { createDrawerNavigator } from '@react-navigation/drawer'
    // npm install @react-navigation/drawer
    //npx expo install react-native-gesture-handler react-native-reanimated
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
//import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#082408' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#175217' },
        drawerContentStyle: { backgroundColor: '#082408' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#082408',
        drawerActiveBackgroundColor: '#84cf84'
      }}>
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name='list' color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name='Favorites' 
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
        }}  
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <Provider store={store}>
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
              name='Drawer' 
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
              // INSTEAD SET THE OPTIONS ON STACK.NAVIGATOR (Before turned to a drawer navigator)
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
              options={{
                title: 'About the Meal'
              }}
              // ADD IN HEADER IF DOES NOT NEED TO DO ANYTHING ON THIS SCREEN
              // options={{
              //   headerRight: () => {
              //     return <Text>In the Header</Text>
              //   }
              // }} 
              // INSTEAD SET THE OPTIONS IN THE MEALS DETAILS SCREEN COMPONENT
              // options={ ({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return {
              //     title: catId
              //   }
              // }}   
            />
          </Stack.Navigator>  
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
