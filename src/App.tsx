import { Home } from './pages/home';
import { useEffect } from 'react';
import { fetchTasks } from './features/tasksReduce';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
