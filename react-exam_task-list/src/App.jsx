import './App.css';
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout"

import { ThemeProvider } from '@mui/material/styles';
import theme from './theming/theme';

import TaskList from "./pages/taskList/TaskListPage";




function App() {
  return (
    <ThemeProvider theme={theme}>

      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<TaskList />} />

          {/* <Route path="user" element={<TaskList />} /> */}


          {/* <Route path="characters" element={<CharactersPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="user">
            <Route index element={<UsersPage />} />
            <Route
              path="createuser"
              element={<CreateUserPage />}
            />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>


    </ThemeProvider>
  );
}

export default App;
