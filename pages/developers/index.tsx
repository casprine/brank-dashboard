import { DashboardLayout } from 'components/common';
import ComingSoon from 'components/comingSoon/comingSoon';

const Developers = () => {
  return (
    <DashboardLayout>
      <ComingSoon
        icon={{ name: 'external-link-square' }}
        description="Add a layer of intelligence in your spending process by creating virtual cards that help you categorize spending as well as capture receipts associated with each transaction."
      />{' '}
    </DashboardLayout>
  );
};

export default Developers;
