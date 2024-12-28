import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/Start'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import { useContext } from 'react'
import { UserDataContext } from './context/UserContext'
import { UserProtectWrapper } from './pages/UserProtectWrapper'
import { CaptainProtectWrapper } from './pages/CaptainProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'



const App = () => {
   const ans=useContext(UserDataContext)
   console.log(ans);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/captainsignup' element={<CaptainSignup/>}/>
        <Route path='/captainlogin' element={<CaptainLogin/>}/>
        <Route path='/riding' element={<Riding/>}/>
        <Route path='/captains/riding' element={<CaptainRiding/>}/>
        
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }/>

        <Route path='/users/logout' element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
        }/>

        <Route path='/captain/home' element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
        }/>
        
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout/>
          </CaptainProtectWrapper>
        }/>
        <Route path='/captain' element={<CaptainHome/>}/>
      </Routes>
    </div>
  )
}

export default App