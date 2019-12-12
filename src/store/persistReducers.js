import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'schoolnote',
      storage: AsyncStorage,
      whitelist: ['note', 'login'],
    },
    reducers
  );

  return persistedReducer;
};
