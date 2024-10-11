import { ChakraProvider } from "@chakra-ui/react";
import { AllRoutes } from "./allRoutes";
import "./App.css";
import { Footer } from "./components/landingpage/footer";
import { NavBar } from "./components/navBar";
import { ModalProvider } from "./contexts/ModalContext";
import ContactModal from "./components/ContactModal";
function App() {
  return (
    <>
      <ModalProvider>
        <NavBar />
        <ChakraProvider>
          <ContactModal />
        </ChakraProvider>
      </ModalProvider>

      <div className="marginfromtop"></div>
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
