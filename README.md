# Redux sanbox

Contekan redux thunk midleware & typescript

## Sample

```ts
await dispatch(saveNewUser('aaaaaa'));

dispatch(saveNewUser('aaaaaa')).then(() => {
  // DO SOMETHING
});
```

## Typing

```ts
export function saveNewUser(text: string): AppThunk<Promise<void>> {
  return async function saveNewTodoThunk(dispatch, getState) {
    await delay(2000);
    dispatch(setUserState({name: text}));
  };
}
```

```ts
export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action, // known types of actions that can be dispatched
> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E,
) => R;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
```

fariswd  
2024  
🏎️
