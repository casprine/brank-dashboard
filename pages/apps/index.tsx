import { DashboardLayout } from 'components/common';
import EmptyState from 'components/emptyState/EmptyState';
import Header from 'components/header/Header';
import AppCard from 'components/app/AppCard';
import { Grid } from 'components/layout';
import { useRouter } from 'next/router';
import { guardHermes } from 'utils/hermes';
import { IApplicationProps } from 'types';

interface IProps {
  apps: IApplicationProps[];
}

const Apps: React.FC<IProps> = ({ apps }) => {
  const router = useRouter();

  return (
    <DashboardLayout>
      <Header
        title="Applications"
        action={() => router.push('/apps/create')}
        actionLabel="Create Application"
      />

      {apps && (
        <div className="container-large">
          <Grid lg={3}>
            {apps?.map((app: any, index: number) => {
              return (
                <AppCard onClick={() => router.push(`/apps/${app.id}`)} {...app} key={index} />
              );
            })}
          </Grid>
        </div>
      )}
      {!apps.length && (
        <div className="container-large">
          <EmptyState
            title="No Applications found"
            description="Create an application to connect unlimited bank accounts and access our full range of products; all requests are billed"
            action={() => router.push('/apps/create')}
            actionLabel="Create Application"
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export async function getServerSideProps(context: any) {
  const cookie = context.req.headers.cookie;

  const token = cookie
    .split(';')
    .filter((item: string) => item.includes('token'))[0]
    .split('=')[1];

  try {
    let { data } = await guardHermes({
      url: '/applications',
      method: 'GET',
      token,
    });

    const apps = data?.data?.apps;
    if (apps) {
      return {
        props: {
          apps: apps ?? [],
        },
      };
    }
  } catch (error) {}
}

export default Apps;
