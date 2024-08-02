import React, { useEffect } from 'react';
import { Box, Stack, Typography, styled } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import { FaCircleCheck } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../utils/globals';
import {
  deleteTask,
  updateTask,
  fetchTasks,
  setFilterStatus,
} from '../features/tasksReduce';
import PrimaryButton from './primaryButton';

const StyledIconBox = styled(Box)({
  textAlign: 'center',
  color: colors.ORANGE,
});

const TaskBlock = () => {
  interface Task {
    _id: string;
    title: string;
    completed?: boolean;
  }
  const dispatch = useDispatch();
  const { tasks, filterStatus } = useSelector((state) => state.tasks);

  const handleDeleteClick = (taskId: string) => {
    dispatch(deleteTask(taskId)).then(() => {
      dispatch(fetchTasks());
    });
  };

  const handleUpdateClick = (task: Task) => {
    const updatedTask: Task = { ...task, completed: !task.completed };

    dispatch(updateTask({ taskId: task._id, updatedData: updatedTask })).then(
      () => {
        dispatch(fetchTasks());
      },
    );
  };

  const handleFilterChange = (status: string) => {
    dispatch(setFilterStatus(status));
  };

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const filteredTasks = (tasks || []).filter((task: Task) => {
    if (filterStatus === 'completed') return task.completed;
    if (filterStatus === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <>
      <Box width={'100%'}>
        <Stack direction="row" spacing={2} mb={2}>
          <PrimaryButton onClick={() => handleFilterChange('all')} text="all" />

          <PrimaryButton
            onClick={() => handleFilterChange('completed')}
            text="Completed"
          />

          <PrimaryButton
            onClick={() => handleFilterChange('incomplete')}
            text="Incomplete"
          />
        </Stack>
        {filteredTasks?.map((task: Task) => (
          <Box
            bgcolor={colors.MOBILENAV}
            color={colors.ORANGE}
            p={2}
            my={2}
            key={task._id}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <Box>
                <Typography variant="h3" fontSize={'1rem'} fontWeight={500}>
                  {task.title}
                </Typography>
              </Box>
              <Box display={'flex'} justifyContent={'space-between'}>
                <StyledIconBox onClick={() => handleUpdateClick(task)} mr={2}>
                  <FaCircleCheck
                    size={'1.5rem'}
                    cursor={'pointer'}
                    color={task.completed ? 'orange' : colors.FOOTER_TEXT}
                  />
                </StyledIconBox>

                <StyledIconBox onClick={() => handleDeleteClick(task._id)}>
                  <MdDelete
                    size={'1.5rem'}
                    cursor={'pointer'}
                    color="#C62A38"
                  />
                </StyledIconBox>
              </Box>
            </Stack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default TaskBlock;
