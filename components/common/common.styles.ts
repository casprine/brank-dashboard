import { StyleFunction } from 'types';
import theme from 'theme';

const dashboardStyles: StyleFunction = () => {
  return {
    minHeight: '100vh',
    backgroundColor: theme.colors.blackAlpha[50],
  };
};

export { dashboardStyles };
