import Image from 'next/image';
import { Flex, Stack, Grid } from 'components/layout';
import { sideBarStyles } from './sidebar.styles';
import MenuItem from './MenuItem';
import { IRoute } from 'types';
import { useRouter } from 'next/router';
import { useAppProvider } from 'context/AppProvider';
import { GridItem } from 'components/layout/Grid';

const routes: IRoute[] = [
  { label: 'Home', path: '/', icon: 'columns' },
  { label: 'Apps', path: '/apps', icon: 'rocket-launch' },
  { label: 'Products', path: '/products', icon: 'box' },
  { label: 'Customers', path: '/customers', icon: 'user-crown' },
  { label: 'Developers', path: '/developers', icon: 'external-link-square' },
  { label: 'Settings', path: '/settings', icon: 'cog' },
];

const Sidebar = () => {
  const router = useRouter();
  const { client, logout } = useAppProvider();

  return (
    <Flex css={sideBarStyles()} jc="space-between" ai="center" stack>
      <Flex className="company-header" ai="center" jc="space-between">
        <Flex>
          {/* <Image src="/images/brank-logo.png" width={35} height={35} className="company-logo" /> */}
          <Stack className="company-details" jc="center">
            <p className="company-name">{client?.['company_name']}</p>
            <p className="username">
              {client?.['first_name']} {client?.['last_name']}
            </p>
          </Stack>
        </Flex>

        <Flex>
          <p>Help</p>
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

{
  /* <Flex ai="center" jc="space-between" className="header">
<Flex className="company-logo-container">
  <Image src="/images/brank-logo.png" width={35} height={35} className="company-logo" />
  <Stack className="company-details" jc="center">
    <p className="company-name">{client?.['company_name']}</p>
    <p className="username">
      {client?.['first_name']} {client?.['last_name']}
    </p>
  </Stack>
</Flex>
</Flex>



<Flex className="footer">
<MenuItem label="Logout" icon="sign-out-alt" action={() => logout()} />
</Flex> */
}
