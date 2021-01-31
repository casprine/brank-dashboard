import { StyleFunction } from 'types';
import theme from 'theme';

const dashboardStyles: StyleFunction = () => {
  return {
    outline: '1px solid red',
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '320px 1fr',
    backgroundColor: theme.colors.gray[50],

    '.page-container': {
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: 6,
      boxShadow: theme.shadows.xl,
      padding: '30px',
    },
  };
};

export { dashboardStyles };
