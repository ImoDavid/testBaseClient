import { Button } from '@mui/material';
import { colors } from '../utils/globals';

interface PrimaryButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text = 'click me',
  onClick,
}) => {
  return (
    <>
      <Button
        variant="outlined"
        // endIcon={<AiOutlineDownload />}
        sx={{
          color: colors.ORANGE,
          borderColor: colors.ORANGE,
          textTransform: 'capitalize',
          marginLeft: '15px',
          '&:hover': {
            borderColor: colors.ORANGE,
          },
        }}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );
};

export default PrimaryButton;
