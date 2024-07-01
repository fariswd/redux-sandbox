import {Middleware} from 'redux';

export const loggerMiddleware: Middleware =
  ({dispatch, getState}) =>
  next =>
  action => {
    console.log(action, 'action');

    // dispatch(...something)
    // checkstate... getState()

    return next(action);
  };

export default loggerMiddleware;
