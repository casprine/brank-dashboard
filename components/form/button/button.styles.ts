import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = () => {
  return {
    height: '50px',
    width: '100%',
    borderRadius: '6px',
    border: '0',
    margin: '20px 0',
    backgroundColor: theme.colors.primary,
    boxShadow: theme.shadows.md,
    cursor: 'pointer',
    outline: 'none',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      boxShadow: '0px 0px 0px 4px rgb(5 150 105 / 20%)',
    },
  };
};

export default generateStyles;
