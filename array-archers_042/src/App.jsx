


import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes";
import BikesPage from "./pages/BikesPage";


const App = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" bg="gray.100">
        <AllRoutes />
      </Box>
    </ChakraProvider>
  );
};

export default App;













// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     </>
//   )
// }

// export default App
