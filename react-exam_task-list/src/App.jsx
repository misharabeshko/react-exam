import './App.css';
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout"

import { ThemeProvider } from '@mui/material/styles';
import theme from './theming/theme';

import TaskList from "./pages/taskList/TaskListPage";
import TaskFormPage from './pages/TaskFormPage/taskFormPage';




function App() {
  return (
    <ThemeProvider theme={theme}>

      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<TaskList />} />

          <Route path="taskFormPage" element={<TaskFormPage />} />
          <Route path="taskFormPage/:taskId" element={<TaskFormPage />} />


        </Route>
      </Routes>


    </ThemeProvider>
  );
}

export default App;
