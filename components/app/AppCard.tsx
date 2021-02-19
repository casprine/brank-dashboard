import { Flex } from 'components/layout';
import { appCardStyles } from './app.styles';
import { Stack } from 'components/layout';
import Icon from 'components/icon/Icon';
import { format } from 'date-fns';
import theme from 'theme';

const imageNames = [
  'Aare.svg',
  'Clarence.svg',
  'Doubs.svg',
  'Hinterrhein.svg',
  'Inn.svg',
  'Kander.svg',
  'Linth.svg',
  'Mohaka.svg',
  'Ngaruroro.svg',
  'Oreti.svg',
  'Rangitikei.svg',
  'Reuss.svg',
  'rne.svg',
  'Thur.svg',
  'Waihou.svg',
  'Waimakariri.svg',
  'Wairau.svg',
];

interface IProps {
  onClick?: () => void;
  name: string;
  createdAt: string | Date;
  status?: 'production' | 'sandbox';
}

const AppCard: React.FC<IProps> = ({ onClick, name, createdAt, status = 'production' }) => {
  const cardImageIndex = Math.floor(Math.random() * imageNames.length + 1);
  console.log({ cardImageIndex });
  return (
    <Flex css={appCardStyles({ status })} stack onClick={onClick}>
      <Stack jc="space-between" ai="center" isInline>
        <p className="name">{name}</p>
        <div className="status">{status}</div>
      </Stack>

      <Flex className="date" ai="center">
        <Icon icon={['fad', 'calendar-week']} color={theme.colors.gray[700]} size="lg" />
        <p>{format(new Date(createdAt), 'dd/MM/yyyy')}</p>
      </Flex>

      <div className="img">
        <img src={`/images/svgs/${imageNames[cardImageIndex - 1]}`} />
      </div>
    </Flex>
  );
};

export default AppCard;
