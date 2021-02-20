import { StyleFunction } from 'types';
import theme from 'theme';
import { ToastType } from './Toast';

export const styleMapping = {
  success: {
    background: theme.colors.primary,
    title: theme.colors.white,
    description: theme.colors.whiteAlpha[600],
  },

  error: {
    background: theme.colors.red[500],
    title: theme.colors.white,
    description: theme.colors.white,
  },

  warning: {
    background: theme.colors.orange[300],
    title: theme.colors.gray[600],
    description: theme.colors.gray[600],
  },
  info: {
    background: theme.colors.blue[500],
    title: theme.colors.white,
    description: theme.colors.white,
  },
  basic: {
    background: theme.colors.white,
    title: theme.colors.primary,
    description: theme.colors.primary,
  },
};

const generateStyles: StyleFunction = ({ type }: { type: ToastType }) => {
  return {
    padding: '4px',
    transition: 'all 0.3s ease-in-out',
    outline: '1px dotted white',
    willChange: 'transform, opacity, height',

    '.toast': {
      padding: '12px',
      background: styleMapping[type].background,
      borderRadius: '6px',
      width: 'auto',
      minWidth: '300px',
      minHeight: '45px',
      flexGrow: 0,
      boxShadow: theme.shadows.md,
    },

    '.title': {
      color: styleMapping[type].title,
      fontFamily: theme.typography.fonts.sans,
      fontWeight: 800,
      fontSize: '16px',
      flexShrink: 0,
    },

    '.description': {
      color: styleMapping[type].description,
      fontSize: '14px',
      marginTop: 5,
    },

    '.status-icon-container': {
      width: '20px',
      height: '20px',
      borderRadius: 4,
      marginRight: '10px',
      flexShrink: 0,
    },

    '.close-btn': {
      height: '30px',
      padding: 0,
      width: '30px',
      borderRadius: '4px',
      flexShrink: 0,
      margin: 'auto 0',
      '&:hover': { background: theme.colors.whiteAlpha[300] },
    },
  };
};

export default generateStyles;
