import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import SavedPost from './components/SavedPost'
import Login from './auth/Login'
import SignUp from './auth/SignUp'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/savedPost' element={<SavedPost/>}/>
              <Route path ="/login" element={<Login/>}></Route>
              <Route path ="/signup" element={<SignUp/>}></Route> 
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
