import { StyleFunction } from 'types';
import theme from 'theme';

const emptyStateStyles: StyleFunction = () => {
  return {
    height: '50vh',

    '.icon': {
      marginBottom: 30,
    },

    '.title': {
      p: {
        fontFamily:
          '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif',
        fontFeatureSettings: '"pnum"',
        fontVariant: 'proportional-nums',
        lineHeight: '35px',
        fontWeight: 600,
        fontSize: 25,
      },
    },

    '.description': {
      width: '45%',
      textAlign: 'center',
      margin: '20px 0',

      p: {
        color: theme.colors.gray[500],
        fontWeight: 600,
        fontFamily: theme.typography.fonts.sans,
        fontSize: '17px',
        lineHeight: '23px',
      },
    },
  };
};

export default emptyStateStyles;
