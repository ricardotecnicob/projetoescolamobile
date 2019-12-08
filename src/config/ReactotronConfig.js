import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { MY_IP } from 'react-native-dotenv';

/*
  Checlist emulador wifi via usb:

  - Checar se celular e pc estão na mesma rede.

  - Pegar ip com
    ifconfig | grep "inet "

  - Colocar nas configurações do celular o ip:porta
    192.168.x.xx:8081

  - Mapear porta com adb
    adb reverse tcp:9090 tcp:8081

  - Neste documento colocar porta 9090

  - Abrir Reactotron

  - yarn start --reset-cache

  - react-native run-android
*/

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      host: MY_IP,
      port: 9090,
    })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}
