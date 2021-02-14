import { StyleFunction } from 'types';
import theme from 'theme';

const headerStyles: StyleFunction = () => {
  return {
    padding: '30px 3rem 2rem 2rem',
    marginBottom: '2rem',

    '.title': {
      color: theme.colors.primary,
      fontFamily:
        '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif',
      fontFeatureSettings: '"pnum"',
      fontVariant: 'proportional-nums',
      lineHeight: '32px',
      fontWeight: 700,
      fontSize: '28px',
    },

    '.sub-title': {
      color: theme.colors.gray[500],
      fontSize: 14,
      marginTop: 10,
    },
  };
};

export default headerStyles;
