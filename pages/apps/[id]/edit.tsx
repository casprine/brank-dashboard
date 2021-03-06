import { useState } from 'react';
import { DashboardLayout } from 'components/common';
import { Grid } from 'components/layout';
import { useRouter } from 'next/router';
import { GridItem } from 'components/layout/Grid';
import { Button, Form, Input } from 'components/form';
import { useForm } from 'hooks';
import { Stack } from 'components/layout';
import toast from 'components/toast/Toaster';
import { guardHermes } from 'utils/hermes';
import { LOGIN_SUCCESSFUL } from 'constants/requests';
import { IApplicationProps } from 'types';
import { generateStyles } from '../create';

interface IProps {
  app: IApplicationProps;
}
const EditApplication: React.FC<IProps> = ({ app }) => {
  const [showLoadingIndicator, setShowLoading] = useState<boolean>(false);
  const router = useRouter();

  if (!app?.id) router.push('/apps');

  const form = useForm({
    fields: {
      name: app?.name,
      logo: app?.logo,
      description: app?.description,
      callback_url: app?.callback_url,
    },
  });

  async function onSubmit() {
    setShowLoading(true);

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
        router.push(`/apps/${app.id}`);
      }
    } catch (error) {
      setShowLoading(false);
      toast.notify({
        title: 'Unable to update application, please try again',
        type: 'error',
        position: 'bottomRight',
      });
    } finally {
      setShowLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="container-large" css={generateStyles()}>
        <Grid lg={7} gap={0}>
          <GridItem span={2} />
          <GridItem span={3} className="form-container">
            <Stack spacing={20}>
              <Stack spacing={10}>
                <h2 className="title">Edit application</h2>
              </Stack>
              <Form form={form} onSubmit={onSubmit}>
                <Stack spacing={20}>
                  <Input
                    label="Name"
                    placeholder="Name"
                    name="name"
                    value={form.inputState.name}
                    error={form.errors.name}
                    onChange={form.onChange}
                  />
                  <Input
                    label="Description"
                    name="description"
                    placeholder="Description"
                    value={form.inputState.description}
                    error={form.errors.description}
                    onChange={form.onChange}
                  />
                  <Input
                    label="App logo"
                    placeholder="App logo"
                    name="logo"
                    value={form.inputState.logo}
                    error={form.errors.logo}
                    onChange={form.onChange}
                  />
                  <Input
                    label="Webhook"
                    placeholder="Webhook"
                    name="callback_url"
                    value={form.inputState.callback_url}
                    error={form.errors.callback_url}
                    onChange={form.onChange}
                  />
                  <Button isLoading={showLoadingIndicator} size="lg" type="submit">
                    Update
                  </Button>
                </Stack>
              </Form>
            </Stack>
          </GridItem>
          <GridItem span={2} />
        </Grid>
      </div>
    </DashboardLayout>
  );
};

export default EditApplication;

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
