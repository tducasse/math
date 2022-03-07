import { Button, Divider, Flex, Box } from '@chakra-ui/react';

export const Nav = () => {
  return (
    <Box>
      <Flex flexDirection="row" minWidth={'100vw'}>
        <Button variant="ghost" color="current">
          Home
        </Button>
        <Button variant="ghost" color="current">
          About
        </Button>
      </Flex>
      <Divider />
    </Box>
  );
};
