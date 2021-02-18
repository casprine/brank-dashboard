import * as React from 'react';

import Flex from 'components/layout/Flex';
import Icon from 'components/icon/Icon';

import theme from 'theme';
import { IIcon } from 'types';
import { IconName } from '@fortawesome/pro-solid-svg-icons';

const ComingSoon: React.FC<{ icon: IIcon; description: string }> = ({ icon, description }) => {
  return (
    <Flex
      css={{
        height: '80vh',
      }}
      ai="center"
      jc="center"
    >
      <Flex css={{ width: '450px' }} ai="center" stack>
        <Flex
          ai="center"
          jc="center"
          css={{
            backgroundColor: theme.colors.gray[400],
            width: '100px',
            height: '100px',
            borderRadius: '50%',
          }}
        >
          <Icon size="3x" color={theme.colors.gray[100]} icon={['fad', icon.name as IconName]} />
        </Flex>

        <h3
          css={{
            marginBottom: '2px',
            fontSize: '2.5rem',
            fontFamily: theme.typography.fonts.bold,
            color: theme.colors.secondary,
            marginTop: 20,
          }}
        >
          Coming soon
        </h3>
        <p
          css={{
            textAlign: 'center',
            color: theme.colors.gray[500],
            fontWeight: 600,
            fontFamily: theme.typography.fonts.sans,
            fontSize: '17px',
            marginTop: 20,
            lineHeight: '25px',
          }}
        >
          {description}
        </p>

        <p></p>
      </Flex>
    </Flex>
  );
};

export default ComingSoon;
