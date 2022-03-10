import React from 'react';
import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { Home } from './Home';
import { theme } from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Module } from './Module';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minHeight={'100vh'} flexDirection={'column'}>
        <BrowserRouter>
          <Box flex={1} mt={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:name" element={<Module />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
