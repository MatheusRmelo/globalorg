import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Projects from '../screens/Projects';

const MainTab = createBottomTabNavigator();

export default ()=>(
    <MainTab.Navigator>
        <MainTab.Screen name="Home" component={Home} />
        <MainTab.Screen name="Search" component={Search} />
        <MainTab.Screen  name="Projects" component={Projects} />
    </MainTab.Navigator>
)