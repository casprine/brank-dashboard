import { useState } from 'react';
import { Grid } from 'components/layout';
import { GridItem } from 'components/layout/Grid';
import { Button, Form, Input } from 'components/form';
import { Stack } from 'components/layout';
import { StyleFunction } from 'types';
import theme from 'theme';
import { IUseForm } from 'hooks/useForm';

interface IProps {
  form: IUseForm;
  onSubmit: () => void;
  isLoading: boolean;
}

const ApplicantionForm: React.FC<IProps> = ({ form, onSubmit, isLoading }) => {
  const [mode, setMode] = useState<'edit' | 'view'>('view');

  return (
    <div css={generateStyles()}>
      <Grid lg={1} gap={0}>
        <GridItem span={3} className="form-container">
          <Stack spacing={20}>
            <Stack spacing={10} isInline jc="space-between" ai="center">
              <h2 className="tab-title">{mode === 'edit' ? 'Edit application' : 'Application'}</h2>
              {mode === 'view' && <Button action={() => setMode('edit')}>Edit</Button>}
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
                  disabled={mode === 'view'}
                />
                <Input
                  label="Description"
                  name="description"
                  placeholder="Description"
                  value={form.inputState.description}
                  error={form.errors.description}
                  onChange={form.onChange}
                  disabled={mode === 'view'}
                />
                <Input
                  label="App logo"
                  placeholder="App logo"
                  name="logo"
                  value={form.inputState.logo}
                  error={form.errors.logo}
                  onChange={form.onChange}
                  disabled={mode === 'view'}
                />
                <Input
                  label="Webhook"
                  placeholder="Webhook"
                  name="callback_url"
                  value={form.inputState.callback_url}
                  error={form.errors.callback_url}
                  onChange={form.onChange}
                  disabled={mode === 'view'}
                />

                {mode === 'edit' && (
                  <Button isLoading={isLoading} size="lg" type="submit">
                    Save
                  </Button>
                )}
              </Stack>
            </Form>
          </Stack>
        </GridItem>
        <GridItem span={2} />
      </Grid>
    </div>
  );
};

const generateStyles: StyleFunction = () => {
  return {
    margin: '20px 0',
    backgroundColor: 'white',
    padding: '25px 20px',
    boxShadow: theme.shadows.sm,
    borderRadius: 6,
    width: '50%',
  };
};

export default ApplicantionForm;
