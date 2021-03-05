import React from 'react';
import { Flex } from 'components/layout';
import { DashboardLayout } from 'components/common';
import Header from 'components/header/Header';
import { guardHermes } from 'utils/hermes';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { useBrank } from 'hooks';
import { IApplicationProps } from 'types';

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
      <Header
        title={app?.name}
        subTitle={`Created on ${format(new Date(app?.created_at), 'dd/MM/yyyy')}`}
        action={() => brankInstance.open()}
        actionLabel="Launch demo"
      />

      <Flex>{/* <p>Detail view</p> */}</Flex>
    </DashboardLayout>
  );
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
