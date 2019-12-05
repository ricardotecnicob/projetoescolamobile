import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Login,
      Dashboard,
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
