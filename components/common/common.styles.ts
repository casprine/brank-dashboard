import { StyleFunction } from 'types';
import theme from 'theme';

const dashboardStyles: StyleFunction = () => {
  return {
    outline: '1px solid red',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    backgroundColor: theme.colors.gray[50],

    '.page-container': {
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: 6,
      boxShadow: theme.shadows.xl,
    },

    '*': {
      //   outline: '1px solid red',
    },
  };
};

export { dashboardStyles };
