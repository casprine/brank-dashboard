import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = () => {
  return {
    flexDirection: 'column',
    display: 'flex',

    '.input': {
      borderRadius: '6px',
      padding: '0.6rem 10px',
      border: `1px solid ${theme.colors.whiteAlpha[50]}`,
      transition: 'all 0.2s ease-in-out',
      boxSizing: 'border-box',
      fontSize: '15px',
      outline: 'none',
      boxShadow: theme.shadows.xs,
      backgroundColor: theme.colors.grey,

      '&:focus': {
        boxShadow: '0px 0px 0px 4px rgb(5 150 105 / 20%)',
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.white,
      },
      '&:hover': {
        borderColor: theme.colors.primary,
      },
    },
    label: {
      marginBottom: 10,
      fontSize: 14,
      color: theme.colors.blackAlpha[600],
      fontFamily: 'var(--header-font',
    },
  };
};

export default generateStyles;
