import { Button } from 'components/form';
import { Flex, Stack } from 'components/layout';
import toast from 'components/toast/Toaster';

const TestPage = () => {
  return (
    <Flex ai="center" jc="center" css={{ minHeight: '100vh' }}>
      <Stack>
        <Button
          action={() =>
            toast.notify({
              title: 'Account created successfully',
              type: 'success',
              position: 'bottomRight',
            })
          }
        >
          Success
        </Button>

        <Button
          appearance="ghost"
          action={() =>
            toast.notify({
              title: 'Something happend',
              type: 'basic',
              position: 'topRight',
            })
          }
        >
          Basic
        </Button>

        <Button
          action={() =>
            toast.notify({
              title: 'Unable to find save application, please try again',
              type: 'error',
              position: 'topLeft',
            })
          }
          appearance="error"
        >
          Error
        </Button>

        <Button
          action={() =>
            toast.notify({
              title: 'something about to go wrong',
              type: 'warning',
              position: 'topLeft',
            })
          }
          appearance="warning"
        >
          Warning
        </Button>
        <Button
          action={() =>
            toast.notify({
              title: 'something about to go wrong',
              type: 'info',
              position: 'topLeft',
            })
          }
          appearance="secondary"
        >
          Info
        </Button>
      </Stack>
    </Flex>
  );
};

export default TestPage;
