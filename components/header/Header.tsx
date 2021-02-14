import { Flex } from 'components/layout';
import generateStyles from './header.styles';
import { Button } from 'components/form';

interface IProps {
  title: string;
  subTitle?: string;
  action?: () => void;
  actionLabel?: string;
}

const Header: React.FC<IProps> = ({ title, subTitle, action, actionLabel }) => {
  return (
    <Flex ai="center" jc="space-between" css={generateStyles()}>
      <Flex stack>
        <p className="title">{title}</p>
        {subTitle && <div className="sub-title">{subTitle}</div>}
      </Flex>

      {action && <Button>{actionLabel}</Button>}
    </Flex>
  );
};

export default Header;
