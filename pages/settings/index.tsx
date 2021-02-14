import { DashboardLayout } from 'components/common';
import ComingSoon from 'components/comingSoon/comingSoon';

const Settings = () => {
  return (
    <DashboardLayout>
      <ComingSoon
        icon={{ name: 'cog' }}
        description="Add a layer of intelligence in your spending process by creating virtual cards that help you categorize spending as well as capture receipts associated with each transaction."
      />{' '}
    </DashboardLayout>
  );
};

export default Settings;
