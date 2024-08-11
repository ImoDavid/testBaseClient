import * as React from 'react';
import { useState } from 'react';
import { Box, Stack, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { colors } from '../utils/globals';
import { IoIosAddCircle } from 'react-icons/io';
import PrimaryButton from './primaryButton';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksReduce';
import store from '../store';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

const MenuBar = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch<typeof store.dispatch>();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      dispatch(addTask({ title: taskTitle }));
      setTaskTitle('');
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Box
      bgcolor={colors.MOBILENAV}
      color={colors.ORANGE}
      p={2}
      my={2}
      width={'100%'}
    >
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box display={'flex'}>
          <Search>
            <SearchIconWrapper>
              <IoIosAddCircle color="orange" size={'1.5rem'} />
            </SearchIconWrapper>
            <StyledInputBase
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Add new task"
            />
          </Search>
          <PrimaryButton text="Add" onClick={handleAddTask} />
        </Box>
        <Stack direction={'row'} alignItems={'center'}>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              color: colors.WHITE,
              bgcolor: colors.ORANGE,
              p: 1,
              borderRadius: '4px',
              textAlign: 'center',
              fontWeight: 'bold',
              marginRight: 2,
            }}
          >
            {currentDate}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MenuBar;
