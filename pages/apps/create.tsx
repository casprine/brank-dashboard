import { DashboardLayout } from 'components/common';
import EmptyState from 'components/emptyState/EmptyState';
import Header from 'components/header/Header';
import AppCard from 'components/app/AppCard';
import { Grid } from 'components/layout';
import { useRouter } from 'next/router';
import { GridItem } from 'components/layout/Grid';
import { Button, Form, Input } from 'components/form';
import { useForm } from 'hooks';

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
            <Form form={form} onSubmit={onSubmit}></Form>
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
