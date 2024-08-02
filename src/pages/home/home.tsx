import { Box, Container, Typography } from '@mui/material';
import { colors } from '../../utils/globals';
import MenuBar from '../../components/appMenu';
import HeaderText from '../../components/headerText';
import TaskBlock from '../../components/taskBlock';

const Home = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        alignItems="center"
        width={['90vw', '60vw']}
      >
        <HeaderText
          title={'get things done'}
          textColor={colors.ORANGE}
          width="40%"
        />
        <MenuBar />
        {
          
       }
        <TaskBlock />
      </Box>
    </Container>
  );
};

export default Home;
