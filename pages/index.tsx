import React from 'react';
import { DashboardLayout } from 'components/common';
import Metric from 'components/metric/Metric';
import { Grid } from 'components/layout';
import { formatMoney } from 'utils/helpers';
import theme from 'theme';
import Header from 'components/header/Header';
// import { GridItem } from 'components/layout/Grid';
// import Chart, { Chart2 } from 'components/charts';
import { useBrank } from 'hooks';

const DashboardHome = () => {
  const brankInstance = useBrank({
    key: 'casprine',
    onSuccess: () => {},
  });

  return (
    <DashboardLayout css={generateStyles()}>
      <Header
        title="Overview"
        subTitle="Today's a great day to do business"
        action={() => brankInstance.open()}
        actionLabel="Launch Demo"
      />
      <section className="container-large">
        <Grid lg={3}>
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

    '.graph': {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: 6,
      boxShadow: theme.shadows.md,
    },

    '.metric-amount': {
      fontWeight: 600,
      color: theme.colors.primary,
      fontSize: 20,
    },

    '.graph-container': {
      marginTop: 50,
    },
  };
};

export default DashboardHome;
