import { Flex } from 'components/layout';
import { Button } from 'components/form';
import generateStyles from './emptyState.styles';

interface IProps {
  title: string;
  description: string;
  action: () => void;
  actionLabel: string;
}

const EmptyState: React.FC<IProps> = ({ title, description, action, actionLabel }) => {
  return (
    <Flex ai="center" jc="center" css={generateStyles()} stack>
      <div className="title">
        <p>{title}</p>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="cta">
        <Button action={action}>{actionLabel}</Button>
      </div>
    </Flex>
  );
};

export default EmptyState;
