import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Form, Input } from 'components/form';
import { Layout } from 'components/common';
import { generateStyles } from 'pages/signup';
import { Stack } from 'components/layout';
import { useForm } from 'hooks';
import { hermes } from 'utils/hermes';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useAppProvider } from 'context/AppProvider';
import { LOGIN_SUCCESSFUL } from 'constants/requests';

const LoginPage = () => {
  const [showLoadingIndicator, setShowLoadingIndicator] = useState(false);
  const router = useRouter();
  const { updateClient } = useAppProvider();

  const form = useForm({
    fields: {
      email: '',
      password: '',
    },
  });

  const { inputState, onBlur, onChange, errors } = form;

  async function loginUser(_: any, inputState: any) {
    setShowLoadingIndicator(true);

    try {
      const { data: data } = await hermes({
        url: '/clients/login',
        data: inputState,
      });

      if (data.message === LOGIN_SUCCESSFUL) {
        const client = data?.data?.client;
        const token = data?.data.token;

        Cookies.set('token', token, { expires: 60 });
        Cookies.set('userId', client.id, { expires: 60 });
        updateClient(client);
        router.push('/');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setShowLoadingIndicator(false);
    }
  }

  return (
    <Layout title="Brank">
      <div className="container" css={generateStyles()}>
        <div className="auth-container">
          <div className="logo-container">
            <Image src="/images/brank-logo.png" alt="brank-logo" width={60} height={60} />
          </div>

          <div className="info">
            <p>Don't have a Brank account?</p>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
          </div>

          <svg width={452} height={12} viewBox="0 0 452 12" fill="none">
            <path
              d="M1 6C6-.667 11-.667 16 6s10 6.667 15 0S41-.667 46 6s10 6.667 15 0S71-.667 76 6s10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0"
              stroke="#1F2937"
              strokeWidth={1.5}
            />
          </svg>

          <Form form={form} onSubmit={loginUser}>
            <Stack className="form">
              <div className="row">
                <Input
                  value={inputState.email}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={errors.email}
                  label="Email"
                  name="email"
                  placeholder="tim@apple.com"
                />
              </div>

              <div className="row">
                <Input
                  value={inputState.password}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={errors.password}
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="••••••••"
                />
              </div>

              <div className="row">
                <Button type="submit" isLoading={showLoadingIndicator}>
                  Login
                </Button>
              </div>
            </Stack>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
