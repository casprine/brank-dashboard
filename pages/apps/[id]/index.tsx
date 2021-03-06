import React from 'react';
import { Flex, Stack, Grid } from 'components/layout';
import { DashboardLayout } from 'components/common';
import { guardHermes } from 'utils/hermes';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { useBrank } from 'hooks';
import theme from 'theme';
import { IApplicationProps, StyleFunction } from 'types';
import { Button } from 'components/form';
import { truncateString, copyText } from 'utils/helpers';

interface IProps {
  app: IApplicationProps;
}

const ApplicationDetailView: React.FC<IProps> = ({ app }) => {
  const router = useRouter();
  if (!app?.id) router.push('/apps');

  const brankInstance = useBrank({
    key: app?.public_key,
    onSuccess: (code: string) => console.log({ code }),
  });

  return (
    <DashboardLayout css={generateStyles()}>
      <Flex ai="center" jc="space-between" className="container-large header">
        <Flex stack>
          <div className="title">{app?.name}</div>
          <div className="sub-title">
            {`Created on ${format(new Date(app?.created_at), 'dd/MM/yyyy')}`}
          </div>
        </Flex>

        <Stack isInline spacing={0} className="btn-grp">
          <Button size="md" appearance="outline" action={() => brankInstance.open()}>
            Demo
          </Button>
          <Button size="md" appearance="outline">
            Go Live
          </Button>
          <Button size="md" appearance="outline" action={() => router.push(`/apps/${app.id}/edit`)}>
            Edit
          </Button>
        </Stack>
      </Flex>

      {/* <section className="container-large">
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
      </section> */}

      <Grid className="container-large api-keys" lg={3}>
        <Stack jc="flex-start" ai="flex-start" css={{ marginRight: 50 }}>
          <Flex ai="center" jc="space-between" style={{ width: '100%' }}>
            <p>Access Token</p>
            <div
              className="copy-action"
              onClick={() => copyText(app?.access_token, 'Access token copied')}
            >
              Copy
            </div>
          </Flex>
          <div className="copy-value">{truncateString(app?.access_token, 50)}</div>
        </Stack>
        <Stack jc="flex-start" ai="flex-start" css={{ width: '100%' }}>
          <Flex ai="center" jc="space-between" style={{ width: '100%' }}>
            <p>Public Key</p>
            <div
              className="copy-action"
              onClick={() => copyText(app?.public_key, 'Public key copied')}
            >
              Copy
            </div>
          </Flex>
          <div className="copy-value" style={{ width: '100%' }}>
            {app?.public_key}
          </div>
        </Stack>
      </Grid>
    </DashboardLayout>
  );
};

const generateStyles: StyleFunction = () => {
  return {
    '.header': {
      marginBottom: '1.5rem',
      marginTop: '1rem',
    },
    '.api-keys': {
      marginTop: 40,
    },

    '.copy-value': {
      padding: 10,
      color: 'white',
      backgroundColor: theme.colors.primary,
      borderRadius: 6,
      fontFamily: theme.typography.fonts.sans,
      fontWeight: 600,
    },

    '.copy-action': {
      backgroundColor: theme.colors.primary,
      borderRadius: 6,
      color: 'white',
      padding: '5px 15px',
      userSelect: 'none',
    },

    '.title': {
      textTransform: 'capitalize',
      color: theme.colors.primary,
      fontFamily:
        '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Ubuntu,sans-serif',
      fontFeatureSettings: '"pnum"',
      fontVariant: 'proportional-nums',
      lineHeight: '32px',
      fontWeight: 700,
      fontSize: '28px',
    },

    '.sub-title': {
      color: theme.colors.gray[700],
      fontSize: 14,
      marginTop: 10,
    },

    '.btn-grp': {
      button: {
        borderRadius: 0,
        marginLeft: -1,

        ':first-of-type': {
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        },

        ':last-of-type': {
          borderTopRightRadius: 6,
          borderBottomRightRadius: 6,
        },
      },
    },
  };
};

export async function getServerSideProps(context: any) {
  const id = context?.query?.id;
  const cookie = context.req.headers.cookie;

  let { data } = await guardHermes({
    url: `/applications/id/${id}`,
    method: 'GET',
    token: cookie.split(';')[0].split('=')[1],
  });

  return {
    props: {
      app: data.data.app ?? {},
    },
  };
}

export default ApplicationDetailView;
