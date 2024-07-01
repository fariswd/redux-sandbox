'use client';

import {useCallback} from 'react';
import {AppThunk, useAppDispatch, useAppSelector} from '@/lib/hooks';
import {withRedux} from './StoreProvider';
import {setUserState} from '@/lib/features/user/userSlice';
import delay from '@/helpers/delay';

export function saveNewUser(text: string): AppThunk<Promise<void>> {
  return async function saveNewTodoThunk(dispatch, getState) {
    await delay(2000);
    dispatch(setUserState({name: text}));
  };
}

const UserPage = () => {
  const userName = useAppSelector(state => state.user.name);
  const dispatch = useAppDispatch();

  const changeUser = useCallback(async () => {
    console.log('1111');
    await dispatch(saveNewUser('capung'));
    // dispatch(saveNewUser('belalang')).then(() => {
    //   console.log('DONE1111');
    // });
    // dispatch(setUserState({name: 'semut'})).then(() => {
    //   console.log('DONE');
    // });
    console.log('222');
  }, [dispatch]);

  return (
    <>
      <h1>User Page</h1>
      <h1>{userName}</h1>
      <button onClick={changeUser}>change user</button>
    </>
  );
};

export default withRedux(UserPage);
