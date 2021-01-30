import { Layout } from 'components/common';

const IndexPage = () => (
  <Layout title="Brank">
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
        width: '50%',
        textAlign: 'center',
        fontSize: '18px',
      }}
    >
      <p>
        Webflow empowers designers to build professional, custom websites in a completely visual
        canvas with no code.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
