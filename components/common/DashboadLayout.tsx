import { ReactNode } from 'react';
import Head from 'next/head';
import { dashboardStyles } from './common.styles';
import Sidebar from 'components/sidebar/Sidebar';

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
        <Sidebar />
        <div className="page-container">{children}</div>
      </main>
    </>
  );
};

export default DashboardLayout;
