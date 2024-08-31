import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { AllRoutes } from './allRoutes'
import './App.css'
import { Footer } from './components/landingpage/footer'
import { NavBar } from './components/navBar'
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <NavBar />
      <div className="marginfromtop"></div>
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App
