import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './Authentication/Signin'
import Signup from './Authentication/Signup'
import Landing from './Landing'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
