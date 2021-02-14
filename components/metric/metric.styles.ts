import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = () => {
  return {
    padding: '20px',
    minHeight: '150px',
    boxShadow: 'inset 0 0 0 1px #e3e8ee',
    margin: '-1px -1px 0 0',
    transition: 'transform .4s',
    cursor: 'default',

    '*': {
      // outline: '1px dotted red',
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
