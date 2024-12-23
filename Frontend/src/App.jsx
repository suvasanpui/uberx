import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import { useContext } from 'react'
import { UserDataContext } from './context/UserContext'



const App = () => {
   const ans=useContext(UserDataContext)
   console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/captainsignup' element={<CaptainSignup/>}/>
        <Route path='/captainlogin' element={<CaptainLogin/>}/>
      </Routes>
    </div>
  )
}

export default App