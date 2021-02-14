import { StyleFunction } from 'types';
import theme from 'theme';

const sideBarStyles: StyleFunction = () => {
  return {
    padding: '25px 2rem',
    backgroundColor: theme.colors.gray[50],
    borderBottom: `1px solid ${theme.colors.gray[200]}`,

    '*': {
      // outline: '1px solid red',
    },

    '.header': {
      backgroundColor: 'white',
      borderRadius: 6,
      cursor: 'default',
    },

    '.company-logo': {
      borderRadius: 6,
      cursor: 'default',
    },

    '.footer': {
      '.menu-item': {
        margin: '3px 0',
      },
    },

    '.company-details': {
      marginLeft: 10,
      cursor: 'default',

      p: {
        marginBottom: 0,
        fontWeight: theme.typography.fontWeights.medium,
      },

      '.company-name': {
        marginBottom: 5,
        color: theme.colors.gray[700],
        fontWeight: 600,
        fontFamily: theme.typography.fonts.sans,
        fontSize: 15,
      },

      '.username': {
        fontSize: 13,
        color: theme.colors.gray[500],
        fontWeight: 600,
        fontFamily: theme.typography.fonts.sans,
      },
    },
  };
};

const menuItemStyles: StyleFunction = ({ active }) => {
  return {
    margin: '0 7px',
    padding: '10px',
    borderRadius: 6,
    transition: 'all 300ms',
    width: '100%',

    ':hover': {
      backgroundColor: active ? 'transparent' : theme.colors.white,
      boxShadow: active ? 'none' : theme.shadows.md,
    },

    '.icon-container': {
      width: 18,
      height: 18,
    },

    p: {
      fontSize: 15,
      color: active ? theme.colors.secondary : theme.colors.gray[500],
      fontWeight: 600,
      marginLeft: 10,
      fontFamily: theme.typography.fonts.sans,
    },
  };
};

export { sideBarStyles, menuItemStyles };
