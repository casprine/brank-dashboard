import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = (props: any) => {
  const { size } = props;

  return {
    position: 'relative',

    // '*': {
    //   outline: '1px solid red',
    // },

    label: {
      display: 'flex',
      alignItems: 'flex-start',
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
      border: props?.hasBorder ? `1px solid ${theme.colors.gray[400]}` : 'none',
      borderRadius: size * 0.25,
      marginRight: 'auto',
      transition: 'all 0.2s ease-in-out',
      marginTop: 4,
      '&:hover': {
        boxShadow: '0px 0px 0px 4px rgb(5 150 105 / 20%)',
      },

      '&:focus': {
        boxShadow: '0px 0px 0px 4px rgb(5 150 105 / 20%)',
      },

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
      width: '92%',
    },

    'input:checked + label .custom-box': {
      background: props?.color,
      borderColor: props?.color,
    },
  };
};

export default generateStyles;
