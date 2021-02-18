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
  { label: 'Products', path: '/products' },
  { label: 'Customers', path: '/customers' },
  { label: 'Developers', path: '/developers' },
  { label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const router = useRouter();
  const { client, logout } = useAppProvider();

  return (
    <Flex css={sideBarStyles()} jc="space-between" ai="center" stack>
      <Flex className="company-header" ai="center" jc="space-between">
        <Flex>
          <Image src="/images/brank-logo.png" width={35} height={35} className="company-logo" />
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
        <Flex>
          {routes.map((route: IRoute, index) => {
            return <MenuItem active={router.pathname === route.path} {...route} key={index} />;
          })}
        </Flex>
        <GridItem lg={1} />
      </Grid>
    </Flex>
  );
};

export default Sidebar;
