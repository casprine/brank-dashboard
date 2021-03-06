import { Flex } from 'components/layout';
import generateStyles from './header.styles';
import { Button } from 'components/form';

interface IProps {
  title: string;
  subTitle?: string;
  actionLabel?: string;
  action?: () => void;
}

const Header: React.FC<IProps> = ({ title, subTitle, action = null, actionLabel }) => {
  return (
    <Flex ai="center" jc="space-between" className="container-large" css={generateStyles()}>
      <Flex stack>
        <p className="title">{title}</p>
        {subTitle && <div className="sub-title">{subTitle}</div>}
      </Flex>
      {action && <Button action={action}>{actionLabel}</Button>}
    </Flex>
  );
};

export default Header;
