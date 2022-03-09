import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { getAllModuleNames, getModule } from './modules';

export const Home = props => {
  const moduleNames = getAllModuleNames();
  const [mod, setModule] = useState(moduleNames[0]);
  const [current, setCurrent] = useState(null);

  const pickOperation = e => {
    const operation = e.target.value;
    setModule(operation);
    setCurrent(getModule(operation));
  };

  return (
    <Box {...props}>
      <Box>Current operation: {mod}</Box>
      <Select onChange={pickOperation}>
        {moduleNames.map(op => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </Select>
      {current && <current.Question />}
    </Box>
  );
};
