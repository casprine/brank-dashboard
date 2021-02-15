import { StyleFunction } from 'types';

const emptyStateStyles: StyleFunction = () => {
  return {
    height: '50vh',

    '*': {
      outline: '1px solid red',
    },
  };
};

export default emptyStateStyles;
