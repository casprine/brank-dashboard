import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = (props: any) => {
  const { size } = props;

  console.log({ size });

  return {
    position: 'relative',

    label: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },

    input: {
      position: 'absolute',
      top: '-20px',
      pointerEvents: 'none',
      opacity: 0,
    },

    '.custom-box': {
      height: size,
      width: size,
      background: theme.colors.white,
      border: props?.hasBorder ? `2px solid ${theme.colors.gray[400]}` : 'none',
      borderRadius: size * 0.25,
      marginRight: '10px',

      '.check': {
        height: 5 + size * 0.1,
        width: 9 + size * 0.1,
        borderLeft: `2px solid ${theme.colors.white}`,
        borderBottom: `2px solid ${theme.colors.white}`,
        transform: 'rotate(-45deg)',
        marginBottom: 3,
      },
    },

    '.label': {
      fontSize: 13,
      fontFamily: theme.typography.fonts.semibold,
      color: theme.colors.gray[500],
    },

    'input:checked + label .custom-box': {
      background: props?.color,
      borderColor: props?.color,
    },
  };
};

export default generateStyles;
