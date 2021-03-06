import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = ({ hasError, disabled }) => {
  const bg = {
    error: theme.colors.orange[100],
    disabled: theme.colors.gray[200],
    default: theme.colors.grey,
  };

  const state = hasError ? 'error' : disabled ? 'disabled' : 'default';

  return {
    flexDirection: 'column',
    display: 'flex',
    marginBottom: hasError ? 0 : 'auto',

    '.input': {
      borderRadius: '6px',
      padding: '0.6rem 10px',
      border: `1px solid ${theme.colors.whiteAlpha[50]}`,
      transition: 'all 0.2s ease-in-out',
      fontFamily: theme.typography.fonts.sans,
      boxSizing: 'border-box',
      fontSize: '15px',
      outline: 'none',
      boxShadow: theme.shadows.xs,
      fontWeight: 600,
      backgroundColor: bg[state],

      color: theme.colors.black,
      '&:focus': {
        boxShadow: hasError
          ? '0px 0px 0px 4px rgb(251 146 60 / 20%)'
          : '0px 0px 0px 4px rgb(0 0 0 / 20%)',
        backgroundColor: theme.colors.white,
        borderColor: hasError ? theme.colors.orange[400] : theme.colors.primary,
      },
      '&:hover': {
        borderColor: hasError ? theme.colors.orange[400] : theme.colors.primary,
      },
    },

    '.error-message': {
      fontSize: 13,
      marginBottom: 10,
      marginTop: 5,
      color: theme.colors.orange[400],
      fontFamily: theme.typography.fonts.sans,
      fontWeight: 600,
    },

    label: {
      marginBottom: 10,
      fontSize: 14,
      color: theme.colors.blackAlpha[600],
    },
  };
};

export default generateStyles;
