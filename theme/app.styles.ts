import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = () => {
  return {
    minHeight: '100vh',
    display: 'grid',

    '.page-container': {
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: 6,
      boxShadow: theme.shadows.xl,
      padding: '30px',
    },
  };
};

export default generateStyles;
