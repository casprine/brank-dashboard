import { DashboardLayout } from 'components/common';
import ComingSoon from 'components/comingSoon/comingSoon';

const Apps = () => {
  return (
    <DashboardLayout>
      <ComingSoon
        icon={{ name: 'rocket-launch' }}
        description="Add a layer of intelligence in your spending process by creating virtual cards that help you categorize spending as well as capture receipts associated with each transaction."
      />{' '}
    </DashboardLayout>
  );
};

export default Apps;
