import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import SavedPost from './components/SavedPost'
import Login from './auth/Login'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/savedPost' element={<SavedPost/>}/>
            </Route>
              <Route path ="/login" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
