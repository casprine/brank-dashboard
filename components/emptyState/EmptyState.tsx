import { Flex } from 'components/layout';
import { Button } from 'components/form';
import generateStyles from './emptyState.styles';
import theme from 'theme';

interface IProps {
  title: string;
  description: string;
  action: () => void;
  actionLabel: string;
}

function EmptyIcon(props: any) {
  return (
    <svg height="40pt" width="40pt" viewBox="0 -25 430 430" {...props}>
      <path
        d="M228.3 101.3a40.092 40.092 0 0035.5 21.5H410c3.027.024 6.043.36 9 1-4.191-18.155-20.367-31.01-39-31H233.7a41.83 41.83 0 01-10.598-1.398zm0 0M40 359.7V80.101c-.008-22.094 17.906-40.008 40-40h92.102c3.578.007 7.14.48 10.597 1.398l-5.199-9.898a40.092 40.092 0 00-35.5-21.5H50c-22.094-.008-40.008 17.906-40 40v279.597c.027 18.621 12.867 34.774 31 39a44.119 44.119 0 01-1-9zm0 0"
        fill={theme.colors.green[50]}
      />
      <path
        d="M380 82.8H233.7a29.913 29.913 0 01-26.598-16.198l-20.602-39.7A49.762 49.762 0 00142.102 0H50C22.39.012.012 22.39 0 50v279.602c.012 27.609 22.39 49.988 50 50h330c27.61-.012 49.988-22.391 50-50V132.8c-.012-27.61-22.39-49.992-50-50zM50 20.103h92.102A29.906 29.906 0 01168.699 36.3L189.301 76a60.78 60.78 0 004.3 6.902H20V50.2c.004-16.582 13.418-30.039 30-30.097zm360 309.597c-.047 16.551-13.453 29.953-30 30H50c-16.547-.047-29.953-13.449-30-30V102.801h203.898c.985.02 1.961-.113 2.903-.399 2.32.317 4.656.485 7 .5H380c16.547.047 29.953 13.45 30 30zm0 0"
        fill={theme.colors.primary}
      />
    </svg>
  );
}

const EmptyState: React.FC<IProps> = ({ title, description, action, actionLabel }) => {
  return (
    <Flex ai="center" jc="center" css={generateStyles()} stack>
      <div className="icon">
        <EmptyIcon />
      </div>
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
