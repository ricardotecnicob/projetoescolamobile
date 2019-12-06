import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import Classroom from './pages/Classroom';
import Note from './pages/Note';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      App: createBottomTabNavigator(
        {
          'Classes and Students': { // eslint-disable-line
            screen: createStackNavigator(
              {
                Classroom,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: '#024F83',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              }
            ),
            navigationOptions: {
              tabBarVisible: true,
              tabBarLabel: 'Classes',
              tabBarLabelTintColor: '#024F83',
              tabBarIcon: ({ tintColor }) => (
                <Icon name="group" size={20} color={tintColor} />
              ),
            },
          },
          'Dashboard': { // eslint-disable-line
            screen: createStackNavigator(
              {
                Dashboard,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: '#024F83',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              }
            ),
            navigationOptions: {
              tabBarVisible: true,
              tabBarLabel: 'Dashboard',
              tabBarLabelTintColor: '#024F83',
              tabBarIcon: ({ tintColor }) => (
                <Icon name="dashboard" size={20} color={tintColor} />
              ),
            },
          },
          'Notes': { // eslint-disable-line
            screen: createStackNavigator(
              {
                Note,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: '#024F83',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              }
            ),
            navigationOptions: {
              tabBarVisible: true,
              tabBarLabel: 'Notes',
              tabBarLabelTintColor: '#024F83',
              tabBarIcon: ({ tintColor }) => (
                <Icon name="import-contacts" size={20} color={tintColor} />
              ),
            },
          },
        },
        {
          resetOnBlur: true,
          tabBarOptions: {
            // Para que o teclado fique em cima na bottom bar
            keyboardHidesTabBar: true,
            activeTintColor: '#024F83',
            inactiveTintColor: '#aaa',
            // fundo da tab bar
            style: {
              backgroundColor: '#fff',
              borderTopColor: '#eee',
              borderBottomColor: '#fff',
              paddingTop: 20,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              height: 80,
            },
          },
        }
      ),
    },
    {
      initialRouteName: 'Login',
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      // defaultNavigationOptions: {
      //   headerStyle: {
      //     backgroundColor: '#024F83',
      //   },
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {
      //     fontWeight: 'bold',
      //   },
      // },
    }
  )
);

export default Routes;
