import { DashboardLayout } from 'components/common';
import { Grid, Flex } from 'components/layout';
import { GridItem } from 'components/layout/Grid';
import { Button, Form, Input } from 'components/form';
import { useForm } from 'hooks';
import { Stack } from 'components/layout';

interface IProps {}

const CreateApplication: React.FC<IProps> = () => {
  const form = useForm({
    fields: {
      name: '',
      logo: '',
      callback_url: '',
    },
  });

  function onSubmit() {}

  return (
    <DashboardLayout>
      <div className="container-large" css={generateStyles()}>
        <Grid lg={3}>
          <GridItem />
          <GridItem>
            <h2 className="title">Create application</h2>
            <p>Lorem ipssum dolor sit, amet consectetur adipisicing elit. Totam nihil distinctio</p>
            <Form form={form} onSubmit={onSubmit}>
              <Stack>
                <Flex>
                  <Input />
                </Flex>

                <Button>Create</Button>
              </Stack>
            </Form>
          </GridItem>
          <GridItem />
        </Grid>
      </div>
    </DashboardLayout>
  );
};

function generateStyles() {
  return {
    marginBottom: '1.5rem',
    marginTop: '1rem',

    '*': {
      outline: '1px solid red',
    },
  };
}

export default CreateApplication;
