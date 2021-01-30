import { StyleFunction } from 'types';
import theme from 'theme';

const generateStyles: StyleFunction = () => {
  return {
    height: '50px',
    width: '100%',
    borderRadius: '6px',
    border: '0',
    margin: '20px 0',
    backgroundImage: 'var(--btn-background)',

    '&:focus': {
      boxShadow: '0px 0px 0px 4px rgb(5 150 105 / 20%)',
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.white,
    },
  };
};

export default generateStyles;
