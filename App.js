import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { QueryClient, QueryClientProvider } from 'react-query'

import Market from './screen/market'
import General from './screen/general/General';
import { MarketProvider } from './context/market';

const Tab = createMaterialBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MarketProvider>
        <NavigationContainer>
          <Tab.Navigator initialRouteName='Market' barStyle={{ backgroundColor: 'white' }} activeColor="black">
            <Tab.Screen name="Home" component={General} options={{tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26}/>
            )}}/>
            <Tab.Screen name="Discover" component={General} options={{tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="magnify" color={color} size={26}/>
            )}}/>
            <Tab.Screen name="Market" component={Market} options={{tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="chart-bar" color={color} size={26}/>
            )}}/>
            <Tab.Screen name="Wallet" component={General} options={{tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26}/>
            )}}/>
            <Tab.Screen name="Account" component={General} options={{tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={26}/>
            )}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </MarketProvider>
    </QueryClientProvider>
  );
}
