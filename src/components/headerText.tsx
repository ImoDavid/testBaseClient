import { Divider, Typography, Stack } from '@mui/material';
import { colors } from '../utils/globals';

interface HeaderTextProps {
  title: string;
  textColor?: string;
  dividerColor?: string;
  width?: string;
  fontSize?: [string, string];
  textAlign?: 'left' | 'center' | 'right';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
}

const HeaderText: React.FC<HeaderTextProps> = ({
  title,
  textColor = colors.TITLE,
  dividerColor = colors.ORANGE,
  width = '10%',
  fontSize = ['1.4rem', '2rem'],
  textAlign = 'center',
  alignItems = 'center',
}) => {
  return (
    <>
      <Stack alignItems={alignItems} justifyContent={'center'}>
        <Typography
          variant={'h2'}
          fontSize={fontSize}
          color={textColor}
          textTransform={'uppercase'}
          fontWeight={600}
          letterSpacing={'2px'}
          textAlign={textAlign}
        >
          {title}
        </Typography>
        <Divider
          color={dividerColor}
          sx={{ height: '.1rem', width: width, marginY: 2 }}
        />
      </Stack>
    </>
  );
};

export default HeaderText;
