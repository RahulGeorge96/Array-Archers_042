import { AllRoutes } from './allRoutes'
import './App.css'
import { Footer } from './components/landingpage/footer'
import { NavBar } from './components/navBar'
function App() {

  return (
    <>
      <NavBar />
      <div className="marginfromtop"></div>
      <AllRoutes/>
      <Footer />
    </>
  );
}

export default App
