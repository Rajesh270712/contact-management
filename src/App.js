import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import HomePage from './Components/home';
import Contact from './Components/contactform';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<HomePage/>} ></Route>
        <Route path='/contactList' element={<Contact/>} ></Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
