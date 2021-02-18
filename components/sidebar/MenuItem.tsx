import { IconName } from '@fortawesome/pro-solid-svg-icons';
import Icon from 'components/icon/Icon';
import { Flex } from 'components/layout';
import theme from 'theme';
import { IRoute } from 'types';
import { menuItemStyles } from './sidebar.styles';
import Link from 'next/link';

const MenuItem: React.FC<IRoute> = ({ active, label, icon, action, pathPrefix, path = '' }) => {
  const url = pathPrefix ? `${pathPrefix}${path}` : path;

  function renderItem() {
    return (
      <Flex
        css={menuItemStyles({
          active,
        })}
        ai="center"
        className="menu-item"
        onClick={action}
      >
        <p>{label}</p>
      </Flex>
    );
  }

  if (action) {
    return <Flex css={{ width: '100%' }}>{renderItem()}</Flex>;
  }

  return <Link href={url as string}>{renderItem()}</Link>;
};

export default MenuItem;
