import { IconName } from '@fortawesome/pro-solid-svg-icons';
import Icon from 'components/icon/Icon';
import { Flex } from 'components/layout';
import theme from 'theme';
import { IRoute } from 'types';
import { menuItemStyles } from './sidebar.styles';

const MenuItem: React.FC<IRoute> = ({ label, icon }) => {
  return (
    <Flex css={menuItemStyles()} ai="center" className="menu-item">
      <Flex ai="center" jc="center" className="icon-container">
        <Icon icon={['fad', icon as IconName]} color={theme.colors.gray[500]} />
      </Flex>
      <p>{label}</p>
    </Flex>
  );
};

export default MenuItem;
