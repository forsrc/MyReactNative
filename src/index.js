import { AppRegistry, Text, View } from 'react-native';
import React, { Component } from 'react';

import App from './App/App.react';

import {name as appName} from '../app.json';


export default function index() {
    class Root extends Component {
        render() {
            return (
              // <View>
              //   <Text>Hello world!</Text>
              // </View>
                <App></App>

            );
        }
    }

    AppRegistry.registerComponent(appName, () => Root);
}
