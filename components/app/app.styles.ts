import { StyleFunction } from 'types';
import theme from 'theme';

const appCardStyles: StyleFunction = ({ status }: { status: 'string' }) => {
  const statusColor: any = {
    production: {
      bg: theme.colors.green[200],
      fg: theme.colors.green[800],
    },

    sandbox: {
      bg: theme.colors.blue[200],
      fg: theme.colors.blue[800],
    },
  };

  return {
    height: '150px',
    boxShadow: theme.shadows.sm,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: '20px',
    border: `2px solid transparent`,
    transition: 'all 500ms ease',
    overflow: 'hidden',
    position: 'relative',
    // filter: 'grayscale(100%)',
    '&:hover': {
      filter: 'grayscale(0%)',
      boxShadow: theme.shadows.lg,
    },
    '*': {
      outline: '1px dotted red',
    },

    '.status': {
      padding: '5px 7px',
      borderRadius: 4,
      backgroundColor: statusColor?.[status]?.bg,
      color: statusColor?.[status]?.fg,
      textTransform: 'capitalize',
      fontSize: 14,
    },

    '.date': {
      marginTop: 'auto',

      p: {
        marginLeft: 10,
        fontFamily: theme.typography.fonts.sans,
        fontWeight: 600,
        color: theme.colors.gray[700],
      },
    },

    '.name': {
      fontSize: '24px',
      fontWeight: 800,
      fontFamily: theme.typography.fonts.sans,
      color: theme.colors.gray[700],
    },

    '.img': {
      width: '100%',
      height: '100%',
      bottom: '-50%',
      position: 'absolute',
      right: '-70%',

      img: {
        width: '100%',
        borderRadius: '80%',
        transform: 'rotate(180deg)',
      },
    },
  };
};

export { appCardStyles };
