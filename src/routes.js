import React from 'react';
import { iOSUIKit } from 'react-native-typography';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import Classroom from './pages/Classroom';
import Note from './pages/Note';
import Send from './pages/Send';

const styleTab = {
  activeTintColor: '#000',
  labelStyle: [
    {
      fontSize: 20,
    },
  ],
  showIcon: false,
  inactiveTintColor: '#DDD',
  style: { elevation: 0 },
  tabStyle: {
    height: 80,
    backgroundColor: '#FFF',
  },
  scrollEnabled: true,
};

const option = text => {
  const optionNav = {
    tabBarVisible: true,
    tabBarLabel: `${text}`, //<Text style={[{ fontSize: 18 }]}>{text}</Text>,
    tabBarOptions: styleTab,
  };

  return optionNav;
};

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      App: createMaterialTopTabNavigator(
        {
          'Classes and Students': {
            screen: Classroom,
            navigationOptions: option('Classroom'),
          },
          Dashboard: {
            screen: Dashboard,
            navigationOptions: option('Dashboard'),
          },
          Notes: {
            screen: Note,
            navigationOptions: option('Notes'),
          },
          Send: {
            screen: Send,
            navigationOptions: option('Send'),
          },
        },
        {
          resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#024F83',
            inactiveTintColor: '#aaa',
            scrollEnabled: true,
          },
        }
      ),
    },
    {
      initialRouteName: 'App',
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
    }
  )
);

export default Routes;
