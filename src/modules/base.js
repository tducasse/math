import { Box } from '@chakra-ui/react';

const name = 'operation';

const Question = () => {
  return <Box>This is a question</Box>;
};

export const extend = (overrides = {}) => ({
  name,
  Question,
  ...overrides,
});
