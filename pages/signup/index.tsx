import Link from 'next/link';
import Image from 'next/image';
import { Button, Input, Checkbox, Form } from 'components/form';
import { Stack, Flex } from 'components/layout';
import { Layout } from 'components/common';
import theme from 'theme';
import { useForm } from 'hooks';
import { useState } from 'react';
import { hermes } from 'utils/hermes';
import { useRouter } from 'next/router';
import { ACCOUNT_CREATED_SUCCESSFULLY } from 'constants/requests';
import Cookies from 'js-cookie';
import { useAppProvider } from 'context/AppProvider';

const SignupPage = () => {
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  const router = useRouter();
  const { updateClient } = useAppProvider();

  const form = useForm({
    fields: {
      first_name: '',
      last_name: '',
      email: '',
      company_name: '',
      password: '',
    },
  });

  const { inputState, onBlur, onChange, errors } = form;

  async function createAccount(_: any, inputState: any) {
    setShowLoadingIndicator(true);
    try {
      const { data } = await hermes({
        url: '/clients',
        data: inputState,
      });

      if (data?.message === ACCOUNT_CREATED_SUCCESSFULLY) {
        const client = data?.data?.client;
        const token = data?.data.token;

        Cookies.set('token', token, { expires: 60 });
        Cookies.set('userId', client.id, { expires: 60 });
        updateClient(client);
        router.push('/');
      }
    } catch (error) {
      console.log([error]);
    } finally {
      setShowLoadingIndicator(false);
    }
  }

  return (
    <Layout title="Brank">
      <div className="container" css={generateStyles()}>
        <div className="auth-container">
          <Stack>
            <div className="logo-container">
              <Image src="/images/brank-logo.png" alt="brank-logo" width={60} height={60} />
            </div>

            <div className="info">
              <p>Already have a Brank account?</p>
              <Link href="/login">
                <a>Log in</a>
              </Link>
            </div>
          </Stack>

          <svg width={452} height={12} viewBox="0 0 452 12" fill="none">
            <path
              d="M1 6C6-.667 11-.667 16 6s10 6.667 15 0S41-.667 46 6s10 6.667 15 0S71-.667 76 6s10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0"
              stroke="#1F2937"
              strokeWidth={1.5}
            />
          </svg>

          <Form form={form} onSubmit={createAccount}>
            <Stack className="form">
              <Flex className="name-input-container">
                <Input
                  value={inputState.first_name}
                  onChange={onChange}
                  onBlur={onBlur}
                  name="first_name"
                  error={errors.first_name}
                  label="First Name"
                  placeholder="Tim"
                />
                <Input
                  value={inputState.last_name}
                  onChange={onChange}
                  onBlur={onBlur}
                  name="last_name"
                  error={errors.last_name}
                  label="Last Name"
                  placeholder="Apple"
                />
              </Flex>

              <div className="row">
                <Input
                  value={inputState.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  name="email"
                  error={errors.email}
                  label="Email"
                  placeholder="tim@apple.com"
                />
              </div>

              <div className="row">
                <Input
                  value={inputState.company_name}
                  onChange={onChange}
                  onBlur={onBlur}
                  name="company_name"
                  error={errors.company_name}
                  label="Company Name"
                  placeholder="Apple Inc."
                />
              </div>

              <div className="row">
                <Input
                  name="password"
                  error={errors.password}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={inputState.password}
                  type="password"
                  label="Password"
                  placeholder="••••••••"
                />
              </div>

              <div className="terms-checkbox">
                <Checkbox
                  customLabel={
                    <p>
                      By signing up you agree to the{' '}
                      <Link href="/login">
                        <a>Terms of Use</a>
                      </Link>{' '}
                      and
                      <Link href="/login">
                        <a> Privacy Policy</a>
                      </Link>
                    </p>
                  }
                />
              </div>

              <div className="row">
                <Button size="lg" type="submit" isLoading={showLoadingIndicator}>
                  <p className="btn-text">Get started</p>
                </Button>
              </div>
            </Stack>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export function generateStyles() {
  return {
    svg: {
      marginBottom: '20px',
    },
    '.logo-container': {
      padding: '0 50px',
      marginBottom: '30px',
    },
    '.info': {
      padding: '0 50px',
      marginBottom: '30px',
    },
    '.info p': {
      fontSize: '15px',
      color: 'var(--primary-text-color)',
      marginBottom: '10px',
    },
    '.info a': {
      textDecoration: 'none',
      color: theme.colors.secondary,
      fontSize: '14px',
    },

    '.form': {
      width: '100%',
      padding: '0 50px',
      margin: '20px 0',
    },

    '.name-input-container': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '.input-container': {
        width: '48%',
      },
    },

    '.btn-text': {
      color: 'white',
      textShadow: '1px 1px 1px var(--primary-green)',
      fontWeight: 500,
      fontSize: '17px',
    },

    '.terms-checkbox': {
      fontSize: 14,
      lineHeight: '18px',

      a: { fontWeight: 500, color: theme.colors.primary, textDecoration: 'underline' },
    },
  };
}

export default SignupPage;
