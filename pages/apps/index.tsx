import { DashboardLayout } from 'components/common';
import EmptyState from 'components/emptyState/EmptyState';
import Header from 'components/header/Header';

const Apps = () => {
  return (
    <DashboardLayout>
      <Header title="Applications" action={() => {}} actionLabel="Create Application" />

      <div className="container-large">
        <EmptyState
          title="No Applications found"
          description="Create an application to connect unlimited bank accounts and access our full range of products; all requests are billed"
          action={() => {}}
          actionLabel="Create Application"
        />
      </div>
    </DashboardLayout>
  );
};

export default Apps;
