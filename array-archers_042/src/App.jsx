import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import { AllRoutes } from './allRoutes'
import './App.css'
import { Footer } from './components/landingpage/footer'
import { NavBar } from './components/navBar'
import ContactModal from './components/ContactModal';
function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ChakraProvider>
        <NavBar onOpen={onOpen} />
        <ContactModal isOpen={isOpen} onClose={onClose} />
      </ChakraProvider>

      <div className="marginfromtop"></div>
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App
