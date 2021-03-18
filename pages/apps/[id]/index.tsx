import React, { useState } from 'react';
import { Flex, Stack } from 'components/layout';
import { DashboardLayout } from 'components/common';
import { guardHermes } from 'utils/hermes';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { useBrank } from 'hooks';
import theme from 'theme';
import { IApplicationProps, StyleFunction, IAppLink, ITableColumn } from 'types';
import { Button } from 'components/form';
import { copyText } from 'utils/helpers';
import Tab from 'components/Tab/Tab';
import ApplicationForm from 'components/application/ApplicationForm';
import { useForm } from 'hooks';
import { LOGIN_SUCCESSFUL } from 'constants/requests';
import toast from 'components/toast/Toaster';
import { Input } from 'components/form';
import { CSSObject } from '@emotion/react';
import DataTable from 'components/dataTable/DataTable';
import Tag from 'components/Tag/Tag';
interface IProps {
  app: IApplicationProps;
}

const appLinkColumns: ITableColumn[] = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Created On',
    dataIndex: 'created_at',
    key: 'created_at',
    render: (created_at) => {
      return (
        <p css={{ fontSize: '15px', color: theme.colors.gray[700] }}>
          {format(new Date(created_at), 'MMM dd, yyyy')}
        </p>
      );
    },
  },
  {
    title: 'Contract Code',
    dataIndex: 'code',
    key: 'code',
    render: (code) => {
      return <p css={{ fontSize: '15px', color: theme.colors.gray[700] }}>{code}</p>;
    },
  },

  {
    title: 'Environment',
    dataIndex: 'environment',
    key: 'environment',
    render: (environment: string) => {
      const environmentColor: any = {
        production: 'green',
        development: 'blue',
      };
      return (
        <Tag label={environment} shape="rounded" color={environmentColor[environment]} size="md" />
      );
    },
  },

  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    render: (state) => {
      const stateType: any = {
        unclaimed: 'orange',
        claimed: 'violet',
      };

      return <Tag label={state} shape="rounded" color={stateType[state]} size="md" />;
    },
  },
];

const ApplicationDetailView: React.FC<IProps> = ({ app }) => {
  const router = useRouter();
  if (!app?.id) router.push('/apps');

  const [client, setClient] = useState(app);
  const [appLinks, setAppLinks] = useState<IAppLink[] | []>([]);
  const brankInstance = useBrank({
    key: app?.public_key,
    onSuccess: (code: string) =>
      toast.notify({ title: 'Link succesful, ', description: `code: ${code}`, position: 'top' }),
  });

  const [editingApplication, setEditingApplication] = React.useState(false);

  const form = useForm({
    fields: {
      name: app?.name,
      logo: app?.logo,
      description: app?.description,
      callback_url: app?.callback_url,
    },
  });

  function fetchLinks() {
    guardHermes({
      url: `/links`,
      data: {
        offSet: 0,
        limit: 100,
        access_token: app?.access_token,
      },
    })
      .then((response) => {
        const links = response?.data?.data?.links;
        if (links) {
          setAppLinks(links);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(fetchLinks, []);

  async function onEditApplication() {
    setEditingApplication(true);

    try {
      const { data } = await guardHermes({
        url: `/applications/id/${app.id}`,
        data: form.inputState,
        method: 'PUT',
      });

      if (data.message === LOGIN_SUCCESSFUL) {
        toast.notify({
          title: 'Application updated succesfully',
          position: 'bottomRight',
          type: 'success',
        });

        setClient(data?.data?.app);
      }
    } catch (error) {
      setEditingApplication(false);
      toast.notify({
        title: 'Unable to update application, please try again',
        type: 'error',
        position: 'bottomRight',
      });
    } finally {
      setEditingApplication(false);
    }
  }

  const TabRoutes = [
    {
      label: 'Details',
      render: (
        <ApplicationForm form={form} isLoading={editingApplication} onSubmit={onEditApplication} />
      ),
    },

    {
      label: 'Keys',
      render: () => {
        return (
          <Flex stack className="api-keys">
            <Flex ai="center" jc="space-between" styles={{ marginBottom: 10 }}>
              <h5 className="tab-title">Keys</h5>
              <a className="docs-link" target="_blank" href="https://docs.withbrank.com/keys">
                Learn more in the docs
              </a>
            </Flex>

            <Stack jc="flex-start" ai="flex-start" styles={{ marginTop: 20 }}>
              <Flex ai="center" jc="space-between" style={{ width: '100%' }}>
                <p>Public Key</p>
                <div
                  className="copy-action"
                  onClick={() => copyText(client?.public_key, 'Public key copied')}
                >
                  Copy
                </div>
              </Flex>

              <Input value={client?.public_key} className="copy-value" />
            </Stack>

            <Stack jc="flex-start" ai="flex-start" styles={{ marginTop: 30 }}>
              <Flex ai="center" jc="space-between" style={{ width: '100%' }}>
                <p>Access Token</p>
                <div
                  className="copy-action"
                  onClick={() => copyText(client?.access_token, 'Access token copied')}
                >
                  Copy
                </div>
              </Flex>

              <Input value={client?.access_token} className="copy-value" />
            </Stack>
          </Flex>
        );
      },
    },

    {
      label: 'Links',
      render: () => {
        return (
          <Flex className="app-links" stack>
            <Flex ai="center" jc="space-between" styles={{ marginBottom: 20 }}>
              <h5 className="tab-title">Links</h5>
              <a className="docs-link" target="_blank" href="https://docs.withbrank.com/keys">
                Learn more in the docs
              </a>
            </Flex>

            <DataTable title="links" showHeader={false} columns={appLinkColumns} data={appLinks} />
          </Flex>
        );
      },
    },
  ];

  return (
    <DashboardLayout css={generateStyles()}>
      <Flex ai="center" jc="space-between" className="container-large header">
        <Flex stack>
          <div className="title">{client?.name}</div>
          <div className="sub-title">
            {`Created on ${format(new Date(client?.created_at), 'dd/MM/yyyy')}`}
          </div>
        </Flex>

        <Stack isInline spacing={0} className="btn-grp">
          <Button size="md" appearance="outline" action={() => brankInstance.open()}>
            Demo
          </Button>
          <Button size="md" appearance="outline">
            Go Live
          </Button>
        </Stack>
      </Flex>

      <div className="container-large">
        <Tab routes={TabRoutes} />
      </div>

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
    </DashboardLayout>
  );
};

const generateStyles: StyleFunction = (): CSSObject => {
  return {
    '.header': {
      marginBottom: '1.5rem',
      marginTop: '2rem',
    },

    '.docs-link': {
      fontSize: '16px',
      textDecoration: 'underline',
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

    '.tab-title': {
      fontSize: '1.5rem',
      fontFamily: theme.typography.fonts.sans,
      fontWeight: 600,
    },

    '.api-keys': {
      margin: '20px 0',
      backgroundColor: 'white',
      padding: '25px 20px',
      boxShadow: theme.shadows.sm,
      borderRadius: 6,
      width: '50%',

      '.input-container': {
        width: '100%',
        margin: 0,
        padding: '0 !important',
      },

      p: {
        fontFamily: theme.typography.fonts.sans,
        fontWeight: 600,
      },

      '.copy-value': {
        padding: 10,
        color: 'white',
        borderRadius: 6,
        fontFamily: theme.typography.fonts.sans,
        fontWeight: 600,
      },

      '.copy-action': {
        backgroundColor: theme.colors.primary,
        borderRadius: 6,
        color: 'white',
        padding: '8px 15px',
        userSelect: 'none',
        fontSize: 15,
      },
    },

    '.app-links': {
      margin: '20px 0',
      backgroundColor: 'white',
      padding: '25px 20px',
      boxShadow: theme.shadows.sm,
      borderRadius: 6,
      // width: '60%',
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

  try {
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
  } catch (error) {
    return {
      props: {},
      error: {},
    };
  }
}

export default ApplicationDetailView;
