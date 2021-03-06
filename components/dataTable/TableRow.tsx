import theme from 'theme';
import { func } from 'types';

export const TableRow: React.FC<{ onClick?: func; className?: string }> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <tr
      className={className}
      onClick={onClick}
      css={{
        borderBottom: `1px solid ${theme.colors.gray[100]}`,
        borderRadius: '4px',
        padding: '0 24px',
        '&:last-child': {
          border: 'none',
        },
        '&:hover': { background: theme.colors.gray[50] },
      }}
    >
      {children}
    </tr>
  );
};
