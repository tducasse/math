import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { Home } from './Home';
import { Nav } from './Nav';
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex minHeight={'100vh'} flexDirection={'column'}>
        <Nav />
        <Home flex={1} />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
