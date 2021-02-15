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
          description="Communicate directly with Plaid support, filter and search cases, and share information with your teammates in real-time."
          action={() => {}}
          actionLabel="Create Application"
        />
      </div>
    </DashboardLayout>
  );
};

export default Apps;
