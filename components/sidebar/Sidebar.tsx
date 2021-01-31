import Image from 'next/image';
import { Flex, Stack } from 'components/layout';
import { sideBarStyles } from './sidebar.styles';
import MenuItem from './MenuItem';
import { IRoute } from 'types';

const routes: IRoute[] = [
  { label: 'Home', path: '/', icon: 'columns' },
  { label: 'Apps', path: '/apps', icon: 'times' },
  { label: 'Customers', path: '/apps', icon: 'user-crown' },
  { label: 'Payment', path: '/apps', icon: 'wallet' },
  { label: 'Products', path: '/apps', icon: 'badge-dollar' },
  { label: 'Developers', path: '/apps', icon: 'times' },
  { label: 'Reports', path: '/apps', icon: 'external-link-square' },
];

const Sidebar = () => {
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
        {/* <Flex ai="center" jc="center" className="expand-icon">
          <Icon icon={['fad', 'exchange-alt']} color={theme.colors.gray[700]} />
        </Flex> */}
      </Flex>

      <div className="menu-links">
        {routes.map((route: IRoute, index) => {
          return <MenuItem {...route} key={index} />;
        })}
      </div>

      <Flex className="footer" stack>
        <MenuItem label="What's New" icon="gift" />
        <MenuItem label="Settings" icon="cog" />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
