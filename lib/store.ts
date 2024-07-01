import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import loggerMiddleware from './logger';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: getDefaultMiddleware => {
      return getDefaultMiddleware({
        serializableCheck: false,
      }).concat(loggerMiddleware);
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
