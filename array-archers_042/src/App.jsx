import './App.css'
import { LandingPage } from './components/landingPage'
import { Footer } from './components/landingpage/footer'
import { LoginPage } from './components/loginPage'
import { NavBar } from './components/navBar'
import { SignupPage } from './components/signupPage'

function App() {

  return (
    <>
    <NavBar/>
    <div className='marginfromtop'></div>
    <LandingPage/>
    <Footer/>
    </>
  )
}

export default App
