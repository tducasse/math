import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  SimpleGrid,
} from '@chakra-ui/react';
import { useState } from 'react';

class Operation {
  config = {
    name: 'operation',
    color: 'blue.500',
  };

  constructor(config) {
    this.config = { ...this.config, ...config };
  }

  Question = () => {
    return <Box>This is a question for {this.config.name}</Box>;
  };

  Number = ({ label, value, onChange }) => {
    return (
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <NumberInput value={value} onChange={onChange}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
    );
  };

  Settings = ({ onSubmit, name }) => {
    const [first, setFirst] = useState(10);
    const [second, setSecond] = useState(10);

    const onChange = name => val => {
      switch (name) {
        case 'first':
          setFirst(val);
          break;
        case 'second':
          setSecond(val);
          break;
        default:
          break;
      }
    };

    return (
      <Center>
        <Flex flexDir={'column'}>
          <Heading size="lg" textTransform={'capitalize'}>
            {name}
          </Heading>
          <form
            onSubmit={e => {
              e.preventDefault();
              onSubmit({ first, second });
            }}
          >
            <SimpleGrid spacing={5} py={10}>
              <this.Number
                label={'Max for the first number'}
                value={first}
                onChange={onChange('first')}
              />
              <this.Number
                label={'Max for the second number'}
                value={second}
                onChange={onChange('second')}
              />
              <Button type="submit">Start</Button>
            </SimpleGrid>
          </form>
        </Flex>
      </Center>
    );
  };
}

export default Operation;
