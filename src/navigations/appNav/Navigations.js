import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../screens/appStack/Home';
import SelectHome from '../../screens/appStack/SelectHome';
import AddTodo from '../../screens/appStack/AddTodo';
import Todo from '../../screens/appStack/Todo';
import {
  accentColor,
  bgColor,
  inactiveTabColor,
  textColor,
} from '../../styles/Colors';

const Tab = createMaterialBottomTabNavigator();

function Navigations() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        labeled={false}
        activeColor={textColor}
        inactiveColor={inactiveTabColor}
        barStyle={{ backgroundColor: accentColor, paddingBottom: 2 }}
        theme={{ colors: { secondaryContainer: 'transparent' } }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="menu" color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="SelectHome"
          component={SelectHome}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="checkbox-outline"
                color={color}
                size={32}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AddTodo"
          component={AddTodo}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="pencil" color={color} size={32} />
            ),
          }}
        />
        <Tab.Screen
          name="Todo"
          component={Todo}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="circle-slice-8"
                color={color}
                size={32}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;
