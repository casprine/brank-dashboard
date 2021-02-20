import { useState } from 'react';
import { DashboardLayout } from 'components/common';
import { Grid } from 'components/layout';
import { useRouter } from 'next/router';
import { GridItem } from 'components/layout/Grid';
import { Button, Form, Input } from 'components/form';
import { useForm } from 'hooks';
import { Stack } from 'components/layout';
import theme from 'theme';
import toast from 'components/toast/Toaster';
import { guardHermes } from 'utils/hermes';
import { LOGIN_SUCCESSFUL } from 'constants/requests';

const CreateApplication: React.FC = () => {
  const [showLoadingIndicator, setShowLoading] = useState<boolean>(false);

  const form = useForm({
    fields: {
      name: '',
      logo: '',
      // description:
      callback_url: '',
    },
  });

  const router = useRouter();

  async function onSubmit() {
    setShowLoading(true);

    try {
      const { data } = await guardHermes({
        url: '/applications',
        data: form.inputState,
        method: 'POST',
      });

      if (data.message === LOGIN_SUCCESSFUL) {
        router.push('/apps');
      }
    } catch (error) {
      setShowLoading(false);
      toast.notify({
        title: 'Unable to create application',
        type: 'error',
        position: 'bottomRight',
      });
    } finally {
      setShowLoading(false);
    }

    // toast.notify({ title: 'Test', position: 'bottomRight', type: 'success' });
  }

  return (
    <DashboardLayout>
      <div className="container-large" css={generateStyles()}>
        <Grid lg={7} gap={0}>
          <GridItem span={2} />
          <GridItem span={3} className="form-container">
            <Stack spacing={20}>
              <Stack spacing={10}>
                <h2 className="title">Create application</h2>
                <p className="subText">
                  Lorem ipssum dolor sit, amet consectetur adipisicing elit. Totam nihil distinctio
                </p>
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
                  {/* <Input label="Description" placeholder="Description" /> */}
                  <Input
                    label="App logo"
                    placeholder="App logo"
                    name="logo"
                    value={form.inputState.logo}
                    error={form.errors.logo}
                    onChange={form.onChange}
                  />
                  <Input
                    label="Callback URL"
                    placeholder="Callback URL"
                    name="callback_url"
                    value={form.inputState.callback_url}
                    error={form.errors.callback_url}
                    onChange={form.onChange}
                  />
                  <Button isLoading={showLoadingIndicator} size="lg" type="submit">
                    Create
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

function generateStyles() {
  return {
    marginBottom: '1.5rem',
    marginTop: '5rem',

    '.form-container': {
      width: '80%',
      margin: '0 auto',
    },

    h2: {
      fontSize: '30px',
      fontWeight: 800,
      fontFamily: theme.typography.fonts.bold,
      color: theme.colors.gray[700],
    },

    '.input-container': {
      width: '100%',

      input: {
        backgroundColor: 'white',
      },

      label: {
        color: theme.colors.blackAlpha[700],
      },
    },

    p: { color: theme.colors.gray[600], fontSize: 14, width: '80%' },

    '*': {
      //   outline: '1px dotted red',
    },
  };
}

export default CreateApplication;
