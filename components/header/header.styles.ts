import { StyleFunction } from 'types';
import theme from 'theme';

const headerStyles: StyleFunction = () => {
  return {
    marginBottom: '1.5rem',
    marginTop: '1rem',

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
      color: theme.colors.gray[700],
      fontSize: 14,
      marginTop: 10,
    },
  };
};

export default headerStyles;
