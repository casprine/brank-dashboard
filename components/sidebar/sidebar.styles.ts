import { StyleFunction } from 'types';
import theme from 'theme';

const sideBarStyles: StyleFunction = () => {
  return {
    padding: '30px 24px',

    '.header': {
      marginBottom: '4.5rem',
      backgroundColor: 'white',
      boxShadow: theme.shadows.md,
      padding: '12px',
      borderRadius: 6,
      cursor: 'default',
    },

    '.company-logo': {
      boxShadow: theme.shadows.lg,
      borderRadius: 6,
      cursor: 'default',
    },

    '.footer': {
      marginTop: 'auto',

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
        fontSize: 15,
        marginBottom: 5,
        color: theme.colors.gray[700],
        fontWeight: 600,
        fontFamily: theme.typography.fonts.sans,
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

const menuItemStyles: StyleFunction = () => {
  return {
    margin: '7px 0',
    padding: '10px',
    borderRadius: 6,
    transition: 'all 300ms',
    width: '100%',

    ':hover': {
      backgroundColor: theme.colors.white,
      boxShadow: theme.shadows.md,
    },

    '.icon-container': {
      width: 18,
      height: 18,
    },

    p: {
      fontSize: 15,
      color: theme.colors.gray[500],
      fontWeight: 600,
      marginLeft: 15,
      fontFamily: theme.typography.fonts.sans,
    },
  };
};

export { sideBarStyles, menuItemStyles };
