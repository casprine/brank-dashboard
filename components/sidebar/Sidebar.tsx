import Image from 'next/image';
import { Flex, Stack, Grid } from 'components/layout';
import { sideBarStyles } from './sidebar.styles';
import MenuItem from './MenuItem';
import { IRoute } from 'types';
import { useRouter } from 'next/router';
import { useAppProvider } from 'context/AppProvider';
import { GridItem } from 'components/layout/Grid';
import Icon from 'components/icon/Icon';

const routes: IRoute[] = [
  { label: 'Home', path: '/' },
  { label: 'Apps', path: '/apps' },
  // { label: 'Products', path: '/products' },
  // { label: 'Customers', path: '/customers' },
  // { label: 'Developers', path: '/developers' },
  // { label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const router = useRouter();
  const { client, logout } = useAppProvider();

  const isRouteActivePath = (path: string) => {
    if (router.pathname === '/' && path === '/') return true;
    return router.pathname.includes(path) && path !== '/';
  };

  return (
    <Flex css={sideBarStyles()} jc="space-between" ai="center" stack>
      <Flex className="company-header" ai="center" jc="space-between">
        <Flex>
          <Flex className="company-logo">
            <Image src="/images/brank-logo.png" width={30} height={30} />
          </Flex>

          <Stack className="company-details" jc="center">
            <p className="company-name">{client?.['company_name']}</p>
            <p className="username">
              {client?.['first_name']} {client?.['last_name']}
            </p>
          </Stack>
        </Flex>

        <Flex ai="center">
          <Stack isInline spacing={24} ai="center" jc="center">
            <p>Help</p>
            <p>Docs</p>

            <Flex className="logout-btn" onClick={logout} ai="center" jc="center">
              <Icon icon={['fad', 'sign-out-alt']} />
            </Flex>
          </Stack>
        </Flex>
      </Flex>

      <Grid lg={3} className="menu-links">
        <GridItem lg={1} />
        <Flex jc="center" ai="center">
          {routes.map((route: IRoute, index) => {
            return (
              <MenuItem active={isRouteActivePath(route.path as string)} {...route} key={index} />
            );
          })}
        </Flex>
        <GridItem lg={1} />
      </Grid>
    </Flex>
  );
};

export default Sidebar;
