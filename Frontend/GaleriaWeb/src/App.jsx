import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Photos from './pages/Photos';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/photos' element={<Photos/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
