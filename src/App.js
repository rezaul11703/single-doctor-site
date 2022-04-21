import logo from './logo.svg';
import './App.css';
import Header from './Pages/Sharing/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appoinment from './Pages/Appoinment/Appoinment';
import LogIn from './Pages/Log In/LogIn';
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Sharing/Footer/Footer';

function App() {
  return (
    <div className='Container'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
