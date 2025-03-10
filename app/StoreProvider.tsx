'use client';

import {ReactNode, useRef} from 'react';
import {Provider} from 'react-redux';
import {AppStore, makeStore} from '@/lib/store';

export default function StoreProvider({children}: {children: ReactNode}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}

export const withRedux = (
  WrappedComponent: React.FunctionComponent,
  // loading?: React.ReactNode,
) => {
  // @ts-ignore
  const Component = props => {
    return (
      <StoreProvider
      // loading={loading}
      >
        <WrappedComponent {...props} />
      </StoreProvider>
    );
  };
  return Component;
};
