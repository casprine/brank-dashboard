import { ReactNode } from 'react';
import Head from 'next/head';
import { dashboardStyles } from './common.styles';

type IProps = {
  children?: ReactNode;
  title?: string;
};
const DashboardLayout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Brank</title>
      </Head>

      <main css={dashboardStyles}>
        <div className="sidebar">
          <p>Sidebar</p>
        </div>

        <div className="page-container">{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
