import { DashboardLayout } from 'components/common';
// import EmptyState from 'components/emptyState/EmptyState';
import Header from 'components/header/Header';
import AppCard from 'components/app/AppCard';
import { Grid } from 'components/layout';
import { useRouter } from 'next/router';

const Apps = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <Header
        title="Applications"
        action={() => router.push('/apps/create')}
        actionLabel="Create Application"
      />
      <div className="container-large">
        <Grid lg={3}>
          <AppCard
            name="Float"
            createdAt="2020-12-25T08:46:34.314716Z"
            description="Float gives you the credit and tools to ensure your business never runs out of cash"
          />
          <AppCard
            name="Kilowa"
            createdAt="2020-12-25T08:46:34.314716Z"
            status="sandbox"
            description="Payment insfrastructure for the next billion users"
          />{' '}
          <AppCard
            name="Pilolo"
            createdAt="2020-12-25T08:46:34.314716Z"
            status="sandbox"
            description="Payment insfrastructure for the next billion users"
          />
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
