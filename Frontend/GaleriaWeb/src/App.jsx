import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Photos from './pages/Photos';
import PhotosUpload from './pages/PhotosUpload';
import Config from './pages/Config';
import Updatepassword from './pages/UpdatePassword';
import PrivateRoute from './service/PrivateRoute';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>

          <Route element={<PrivateRoute/>}>
            <Route path='/photos' element={<Photos/>}></Route>
            <Route path='/photos/upload' element={<PhotosUpload/>}></Route>
            <Route path='/config' element={<Config/>}></Route>
            <Route path='/config/updatepassword' element={<Updatepassword/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
