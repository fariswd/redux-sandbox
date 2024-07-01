import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type UserState = {
  name?: string;
  age?: number;
};

const initialState: UserState = {
  name: undefined,
  age: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState: {...initialState},
  reducers: {
    setUserState: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.keys(action.payload).forEach(key => {
        const _key = key as keyof UserState;
        state[_key] = action.payload[_key] as never;
      });
    },
    resetUserState: () => ({...initialState}),
  },
});

export const {setUserState, resetUserState} = userSlice.actions;
export default userSlice.reducer;
