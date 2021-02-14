import { Flex } from 'components/layout';
import Loader from 'components/Loader/Loader';
import { useAppProvider } from 'context/AppProvider';
import { useRouter } from 'next/router';
import theme from 'theme';

export const ProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, showLoadingIndicator } = useAppProvider();
  const { pathname } = useRouter();

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
  return children;
};
