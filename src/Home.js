import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import * as modules from './modules';

export const Home = props => {
  const operations = Object.keys(modules);
  const [operation, setOperation] = useState(operations[0]);

  const pickOperation = e => {
    setOperation(e.target.value);
  };

  return (
    <Box {...props}>
      <Box>Current operation: {operation}</Box>
      <Select onChange={pickOperation}>
        {operations.map(op => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </Select>
    </Box>
  );
};
