import {BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate, BrowserRouter} from 'react-router-dom';
import './App.css';
import Login from './Login'
import Register from './Register'
import Portal from './Portal'
import About from './pages/About'
import Contact from './pages/Contact'
import Application from './pages/Application'
import Home from './pages/Home'
import ChangePassword from './components/ChangePassword';
import EditApplication from './EditApplication';



function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/portal" element={<Portal />}/>
    <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />  
  <Route path="/application" element={<Application />} />
  <Route path="/home" element={<Home/>} />
  <Route path="/change-password" element={<ChangePassword/>} />
  <Route path="/edit-application" element={<EditApplication/>} />
  </Routes>
</BrowserRouter>
  );
}

export default App;

