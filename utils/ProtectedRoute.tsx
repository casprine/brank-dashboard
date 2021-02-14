import { Flex } from 'components/layout';
import Loader from 'components/Loader/Loader';
import { useAppProvider } from 'context/AppProvider';
import { useRouter } from 'next/router';
import theme from 'theme';

const ProtectedRoute = ({ children }: { children: React.ReactNode }): any => {
  const { isAuthenticated, showLoadingIndicator } = useAppProvider();
  const { pathname, push } = useRouter();

  if (
    showLoadingIndicator ||
    (!isAuthenticated && pathname !== '/login' && pathname !== '/signup')
  ) {
    return (
      <Flex ai="center" jc="center" css={{ height: '100vh' }}>
        <Loader label="Loading ...." color={theme.colors.black} size="small" />
      </Flex>
    );
  }

  if (showLoadingIndicator || (isAuthenticated && pathname === '/login') || pathname === '/signup')
    push('/');

  return children;
};

export default ProtectedRoute;
