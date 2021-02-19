import { DashboardLayout } from 'components/common';
import EmptyState from 'components/emptyState/EmptyState';
import Header from 'components/header/Header';
import AppCard from 'components/app/AppCard';
import { Grid } from 'components/layout';

const Apps = () => {
  return (
    <DashboardLayout>
      <Header title="Applications" action={() => {}} actionLabel="Create Application" />

      <div className="container-large">
        <Grid lg={3}>
          <AppCard name="Float" createdAt="2020-12-25T08:46:34.314716Z" />
          <AppCard name="Kilolwa" createdAt="2020-12-25T08:46:34.314716Z" status="sandbox" />
        </Grid>

        {/* <EmptyState
          title="No Applications found"
          description="Create an application to connect unlimited bank accounts and access our full range of products; all requests are billed"
          action={() => {}}
          actionLabel="Create Application"
        /> */}
      </div>
    </DashboardLayout>
  );
};

export default Apps;
