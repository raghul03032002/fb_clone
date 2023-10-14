import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Friend from './components/Friend';
import Group from './components/Group';
import Post from './components/Post';


function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Friend' element={<Friend/>}/>
  <Route path='/Group' element={<Group/>}/>
  <Route path='/Post' element={<Post/>}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
