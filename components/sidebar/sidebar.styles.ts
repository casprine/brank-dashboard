import { StyleFunction } from 'types';
import theme from 'theme';

const sideBarStyles: StyleFunction = () => {
  return {
    // backgroundColor: theme.colors.gray[50],

    '.company-header': {
      width: '100%',
      padding: '20px 5rem',
      borderBottom: `1px solid ${theme.colors.gray[200]}`,
    },

    '*': {
      // outline: '1px dotted red',
    },

    '.menu-links': {
      padding: '15px 4rem',
      width: '100%',
      borderBottom: `1px solid ${theme.colors.gray[200]}`,
    },

    '.header': {
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
    '*': {
      // outline: '1px dotted red',
    },

    margin: '0 7px',
    padding: '8px 15px',
    borderRadius: 6,
    transition: 'all 300ms',
    width: '100%',
    backgroundColor: active ? theme.colors.gray[100] : 'transparent',

    p: {
      fontSize: 15,
      color: active ? theme.colors.primary : theme.colors.gray[500],
      fontWeight: 600,
      fontFamily: theme.typography.fonts.sans,
    },
  };
};

export { sideBarStyles, menuItemStyles };
