import Link from 'next/link';
import Image from 'next/image';

import { Button, Input } from 'components/form';
import { Layout } from 'components/common';

const SignupPage = () => {
  return (
    <Layout title="Brank">
      <div className="container">
        <div className="auth-container">
          <div className="logo-container">
            <Image src="/images/brank-logo.png" alt="brank-logo" width={60} height={60} />
          </div>

          <div className="info">
            <p>Already have a Brank account?</p>
            <Link href="/login">
              <a>Log in</a>
            </Link>
          </div>

          <svg width={452} height={12} viewBox="0 0 452 12" fill="none">
            <path
              d="M1 6C6-.667 11-.667 16 6s10 6.667 15 0S41-.667 46 6s10 6.667 15 0S71-.667 76 6s10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0 10-6.667 15 0 10 6.667 15 0"
              stroke="#1F2937"
              strokeWidth={1.5}
            />
          </svg>

          <div className="form">
            <div className="flex-row row">
              <Input value="" onChange={() => {}} label="First Name" placeholder="Tim" />
              <Input value="" onChange={() => {}} label="Last Name" placeholder="Apple" />
            </div>
            <div className="row">
              <Input value="" onChange={() => {}} label="Email" placeholder="tim@apple.com" />
            </div>

            <div className="row">
              <Input value="" onChange={() => {}} label="Company Name" placeholder="Apple Inc." />
            </div>

            <div className="row">
              <Input
                value=""
                onChange={() => {}}
                type="password"
                label="Password"
                placeholder="••••••••"
              />
            </div>

            <div className="terms-checkbox">
              <input type="checkbox" />
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
            </div>

            <div className="row">
              <Button>
                <p className="success-btn-text">Get started</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
