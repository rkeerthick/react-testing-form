import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Success from './components/Success'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
        {/* <Route index element={<Login />} /> */}
        <Route index element={<Signup />} />
        <Route path='/success' element={<Success />} />
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
