import { DashboardLayout } from 'components/common';
import Metric from 'components/metric/Metric';
import { Grid } from 'components/layout';
import { formatMoney } from 'utils/helpers';
import theme from 'theme';

const DashboardHome = () => {
  return (
    <DashboardLayout>
      <section css={generateStyles()}>
        <h3>Overview</h3>
        <Grid lg={3} gap={0}>
          <Metric icon="exchange-alt" title="API calls" footer="Estimated api calls">
            <div className="metric-amount">2043</div>
          </Metric>
          <Metric title="Balance" icon="wallet" footer="How much you have in your account">
            <div className="metric-amount">₵{formatMoney(343433)}</div>
          </Metric>
          <Metric title="Dept" icon="money-check-alt" footer="How much you owe us.">
            <div className="metric-amount">₵{formatMoney(34333)}</div>
          </Metric>
        </Grid>
      </section>
    </DashboardLayout>
  );
};

const generateStyles = () => {
  return {
    h3: {
      marginBottom: 50,
    },

    '.metric-amount': {
      fontWeight: 600,
      color: theme.colors.primary,
      fontSize: 20,
    },

    '.grid': {},
  };
};

export default DashboardHome;
