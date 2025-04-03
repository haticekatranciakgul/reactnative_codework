import react from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourite from './Pages/Favourite/Favourite';
import Jobs from './Pages/Jobs/Jobs';
import Detail from './Pages/Detail/Detail';

const Stack = createNativeStackNavigator();


const Router = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="FavouritePage" options={{
          title: 'Favourite',
          headerTintColor: '#fba401',
          headerStyle: { backgroundColor: '#eee' },
          headerTitleAlign: 'center',
        }} component={Favourite} />

        <Stack.Screen name="DetailPage"
           options={{
            title: 'Detail',
            headerTintColor: '#fba401',
            headerStyle: {backgroundColor: '#eee'},
            headerTitleAlign: 'center',
          }}
         component={Detail} />

        <Stack.Screen name="JobsPage" 
        options={{
          title: 'JOBS',
          headerTintColor: '#fba401',
          headerStyle: { backgroundColor: '#eee' },
          headerTitleAlign: 'center',
        }} component={Jobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
