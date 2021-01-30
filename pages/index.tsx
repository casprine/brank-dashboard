import { Layout } from 'components/common';
import { Flex, Stack } from 'components/layout';
import Image from 'next/image';
import { Button, Input } from 'components/form';
import theme from 'theme';

const IndexPage = () => (
  <Layout title="Brank">
    <Flex css={generateStyles()}>
      <Stack jc="center" ai="center" className="wrapper">
        <Image src="/images/brank-logo.png" width={70} height={70} />
        <h1>Brank</h1>
        <p>Mordernizing archaic banking infrastructure</p>
        <Stack isInline ai="center" className="form-wrapper">
          <Input placeholder="Enter your email" className="email-input" />
          <Button>
            <p>Join</p>
          </Button>
        </Stack>
      </Stack>
    </Flex>
  </Layout>
);

function generateStyles() {
  return {
    height: '100vh',
    // outline: '1px solid red',

    // '*': {
    //   outline: '1px solid red',
    // },

    '.wrapper': {
      width: '100%',
    },

    h1: {
      fontFamily: 'var(--header-font)',
    },

    '.form-wrapper': {
      width: '400px',

      '.email-input': {
        width: '100%',
        marginRight: 20,

        input: {
          padding: '0.7rem 10px',
        },
      },

      button: {
        padding: '0.7rem 10px',
        height: 'auto',
        width: '100px',
        color: 'white',
      },
    },
  };
}

export default IndexPage;
