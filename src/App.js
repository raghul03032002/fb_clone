import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Friend from './components/Friend';
import Group from './components/Group';
import Post from './components/Post';
import Shop from './components/Shop'
import Proadd from './components/Proadd';

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
  <Route path='/Shop' element={<Shop/>}/>
  <Route path='Proadd' element={<Proadd/>}/>

</Routes>
</BrowserRouter>
</>
  );
}

export default App;
