import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = () => {
  return {
    padding: '20px 30px',
    minHeight: '160px',
    margin: '-1px -1px 0 0',
    transition: 'all 500ms ease',
    cursor: 'default',
    backgroundColor: theme.colors.white,
    boxShadow: theme.shadows.sm,
    borderRadius: 6,

    '&:hover': {
      boxShadow: theme.shadows.xl,
    },

    '.icon': {
      width: '25px',
      height: '25px',
      backgroundColor: theme.colors.gray[300],
      borderRadius: '50%',
    },

    '.header': {
      p: {
        marginLeft: 10,
        fontSize: 15,
        color: theme.colors.gray[600],
        fontWeight: 500,
      },
    },

    '.footer': {
      fontSize: 13,
      color: theme.colors.gray[500],

      p: {
        fontWeight: 600,
        fontFamily: theme.typography.fonts.sans,
      },
    },
  };
};

export default generateStyles;
