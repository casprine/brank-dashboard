import Link from 'next/link';
import Image from 'next/image';

import { Button, Input, Checkbox } from 'components/form';
import { Stack, Flex } from 'components/layout';
import { Layout } from 'components/common';
import theme from 'theme';
import { useForm } from 'hooks';

const SignupPage = () => {
  const form = useForm({
    fields: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      password: '',
    },
  });

  const { inputState, onBlur, onChange, errors } = form;

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

          <Stack className="form">
            <Flex className="name-input-container">
              <Input
                value={inputState.firstName}
                onChange={onChange}
                onBlur={onBlur}
                name="firstName"
                error={errors.firstName}
                label="First Name"
                placeholder="Tim"
              />
              <Input
                value={inputState.lastName}
                onChange={onChange}
                onBlur={onBlur}
                name="lastName"
                error={errors.lastName}
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
                value={inputState.companyName}
                onChange={onChange}
                onBlur={onBlur}
                name="companyName"
                error={errors.companyName}
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
              <Button>
                <p className="btn-text">Get started</p>
              </Button>
            </div>
          </Stack>
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
      color: theme.colors.primary,
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
