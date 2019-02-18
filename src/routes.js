import { StackNavigator } from 'react-navigation';

import Home from './App/Home.react';


const AppNavigator = StackNavigator({
    home: { screen: Home },
}, {
    headerMode: 'none',
});

export default AppNavigator;
