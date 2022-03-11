import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Play } from './components/Play';
import { Settings } from './components/Settings';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minHeight={'100vh'} flexDirection={'column'}>
        <BrowserRouter>
          <Box flex={1} mt={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:name/settings" element={<Settings />} />
              <Route path="/:name/play" element={<Play />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
