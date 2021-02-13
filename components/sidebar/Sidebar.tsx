import Image from 'next/image';
import { Flex, Stack } from 'components/layout';
import { sideBarStyles } from './sidebar.styles';
import MenuItem from './MenuItem';
import { IRoute } from 'types';
import { useRouter } from 'next/router';

const routes: IRoute[] = [
  // { label: 'Payment', path: '/apps', icon: 'wallet' },
  { label: 'Home', path: '/', icon: 'columns' },
  { label: 'Apps', path: '/apps', icon: 'rocket-launch' },
  { label: 'Products', path: '/products', icon: 'box' },
  { label: 'Customers', path: '/customers', icon: 'user-crown' },
  { label: 'Developers', path: '/developers', icon: 'external-link-square' },
];

const Sidebar = () => {
  const router = useRouter();
  return (
    <Flex css={sideBarStyles()} stack>
      <Flex ai="center" jc="space-between" className="header">
        <Flex className="company-logo-container">
          <Image src="/images/brank-logo.png" width={35} height={35} className="company-logo" />
          <Stack className="company-details" jc="center">
            <p className="company-name">Mont & Co</p>
            <p className="username">Montgomery Hayton</p>
          </Stack>
        </Flex>
      </Flex>

      <div className="menu-links">
        {routes.map((route: IRoute, index) => {
          return <MenuItem active={router.pathname === route.path} {...route} key={index} />;
        })}
      </div>

      <Flex className="footer" stack>
        {/* <MenuItem
          active={router.pathname === '/new-changes'}
          pathPrefix="/app"
          label="What's New"
          icon="gift"
        /> */}
        <MenuItem
          active={router.pathname === '/settings'}
          path="/settings"
          label="Settings"
          icon="cog"
        />
        <MenuItem label="Logout" icon="sign-out-alt" action={() => router.push('/login')} />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
