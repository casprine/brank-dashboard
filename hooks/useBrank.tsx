import React from 'react';
import brank from '../../js-sdk/dist/index';

interface IBrank {
  key: string;
  onSuccess: (contractCode: string) => void;
}

export function useBrank({ key, onSuccess }: IBrank) {
  const instance = React.useMemo(() => {
    const b = brank({ key, onSuccess });

    b.setup();
    return b;
  }, []);
  return instance;
}

export default useBrank;
