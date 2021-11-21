import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Chat } from '../screens/Chat';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'transparent',
                },
            }}
            initialRouteName={'Home'}
        >
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="Chat"
                component={Chat}
            />
        </Navigator>
    );
};