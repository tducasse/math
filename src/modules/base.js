import { Box } from '@chakra-ui/react';

class Operation {
  name = 'operation';

  constructor(config) {
    this.name = config.name;
  }

  Question = () => {
    return <Box>This is a question for {this.name}</Box>;
  };
}

export default Operation;
