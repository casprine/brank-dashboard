import React from 'react';
import { Flex, Stack } from 'components/layout';
import { DashboardLayout } from 'components/common';
import { guardHermes } from 'utils/hermes';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { useBrank } from 'hooks';
import theme from 'theme';
import { IApplicationProps, StyleFunction } from 'types';
import { Button } from 'components/form';
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
    <DashboardLayout>
      <Flex ai="center" jc="space-between" className="container-large" css={generateStyles()}>
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
          <Button size="md" appearance="outline">
            Edit
          </Button>
        </Stack>
      </Flex>

      <Flex>{/* <p>Detail view</p> */}</Flex>
    </DashboardLayout>
  );
};

const generateStyles: StyleFunction = () => {
  return {
    marginBottom: '1.5rem',
    marginTop: '1rem',

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

        ':first-child': {
          borderTopLeftRadius: 6,
          borderBottomLeftRadius: 6,
        },

        ':last-child': {
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
