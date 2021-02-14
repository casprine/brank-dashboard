import { IMetric } from 'types';
import { Flex } from 'components/layout';
import generateStyles from './metric.styles';
import Icon from 'components/icon/Icon';
import theme from 'theme';

const Metric: React.FC<IMetric> = ({ icon, footer, title, children }) => {
  return (
    <Flex stack jc="space-between" ai="flex-start" css={generateStyles()}>
      <Flex ai="center" className="header">
        <Flex ai="center" jc="center" className="icon">
          <Icon icon={['fad', icon]} size="sm" color={theme.colors.gray[600]} />
        </Flex>
        <p>{title}</p>
      </Flex>

      <div className="content">{children}</div>

      <div className="footer">
        <p>{footer}</p>
      </div>
    </Flex>
  );
};

export default Metric;
