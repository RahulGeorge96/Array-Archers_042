
import { useState } from 'react'
import './App.css'
import { NavBar } from './components/navBar'




import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes";
import BikesPage from "./pages/BikesPage";


const App = () => {
  return (
    <>
    <NavBar/>
    <ChakraProvider>
      <Box minHeight="100vh" bg="gray.100">
        <AllRoutes />
      </Box>
    </ChakraProvider>
    </>
  )
}


export default App;






