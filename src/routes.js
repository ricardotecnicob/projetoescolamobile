import React from 'react';
import { Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Help from './pages/Help';

import Classroom from './pages/Classroom';
import Note from './pages/Note';
import Send from './pages/Send';

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
                  headerTransparent: false,
                  headerTintColor: '#024F83',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              }
            ),
            navigationOptions: {
              tabBarVisible: true,
              tabBarLabel: 'Classes and Students',
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
                Send,
                Help,
              },
              {
                defaultNavigationOptions: {
                  headerTransparent: false,
                  headerTintColor: '#024F83',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
                transitionConfig: () => ({
                  transitionSpec: {
                    duration: 750,
                    easing: Easing.out(Easing.poly(4)),
                    timing: Animated.timing,
                    useNativeDriver: true,
                  },
                  screenInterpolator: sceneProps => {
                    const { position, layout, scene } = sceneProps;

                    const thisSceneIndex = scene.index;
                    const width = layout.initWidth;

                    const translateX = position.interpolate({
                      inputRange: [
                        thisSceneIndex - 1,
                        thisSceneIndex,
                        thisSceneIndex + 1,
                      ],
                      outputRange: [width, 0, 0],
                    });

                    const slideFromRight = { transform: [{ translateX }] };

                    return slideFromRight;
                  },
                }),
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
                  headerTransparent: false,
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
