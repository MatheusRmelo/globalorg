import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Projects from '../screens/Projects';

import Icon from 'react-native-vector-icons/FontAwesome';


const MainTab = createBottomTabNavigator();

export default ()=>(
    <MainTab.Navigator 
        initialRouteName="Home"
        tabBarOptions={{
            activeTintColor: '#e91e63',
        }}
    >
        <MainTab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" color={color} size={size} />
                ),
            }} 
        />
        <MainTab.Screen 
            name="Search" 
            component={Search}
            options={{
                tabBarLabel: 'Buscar',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="search" color={color} size={size} />
                ),
            }}
        />
        <MainTab.Screen  
            name="Projects" 
            component={Projects} 
            options={{
                tabBarLabel: 'Projetos',
                tabBarIcon: ({ color, size }) => (
                    <Icon name="list-alt" color={color} size={size} />
                ),
            }}
        />
    </MainTab.Navigator>
)