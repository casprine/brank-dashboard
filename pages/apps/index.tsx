import { DashboardLayout } from 'components/common';
import EmptyState from 'components/emptyState/EmptyState';
import Header from 'components/header/Header';
import AppCard from 'components/app/AppCard';
import { Grid } from 'components/layout';
import { useRouter } from 'next/router';
import { guardHermes } from 'utils/hermes';
import app from 'next/app';

const Apps = ({ apps = [] }) => {
  const router = useRouter();

  console.log({ apps });
  return (
    <DashboardLayout>
      <Header
        title="Applications"
        action={() => router.push('/apps/create')}
        actionLabel="Create Application"
      />
      <div className="container-large">
        {apps.length && (
          <Grid lg={3}>
            <>
              {apps.map((app: any, index: number) => {
                <AppCard
                  key={index}
                  name="Float"
                  createdAt="2020-12-25T08:46:34.314716Z"
                  description="Float gives you the credit and tools to ensure your business never runs out of cash"
                />;
              })}
            </>
          </Grid>
        )}
        {!apps.length && (
          <EmptyState
            title="No Applications found"
            description="Create an application to connect unlimited bank accounts and access our full range of products; all requests are billed"
            action={() => router.push('/apps/create')}
            actionLabel="Create Application"
          />
        )}
      </div>
    </DashboardLayout>
  );
};

// export async function getServerSideProps(context) {
//   const cookie = context.req.headers.cookie;

//   console.log({ context: context.req.headers });

//   let { data } = await guardHermes({
//     url: '/applications',
//     method: 'GET',
//     token: cookie.split(';')[0].split('=')[1],
//   });

//   console.log(JSON.stringify(data));

//   return {
//     props: {
//       apps: data?.data ?? [],
//     },
//   };
// }

export default Apps;
