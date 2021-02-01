import Link from 'next/link';
import Image from 'next/image';

import { Button, Input } from 'components/form';
import { Layout } from 'components/common';
import { generateStyles } from 'pages/signup';
import { Stack } from 'components/layout';
import { useForm } from 'hooks';

const LoginPage = () => {
  const form = useForm({
    fields: {
      email: '',
      password: '',
    },
  });

  const { inputState, onBlur, onChange, errors } = form;

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
              <Button>
                <p className="btn-text">Login</p>
              </Button>
            </div>
          </Stack>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
