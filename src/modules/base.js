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

const base = (overrides = {}) => {
  const name = overrides.name || 'base';
  const color = overrides.color || 'blue.500';
  const firstLabel = overrides.firstLabel || 'Max for the first number';
  const secondLabel = overrides.secondLabel || 'Max for the second number';

  const Question =
    overrides.Question ||
    (() => {
      return <Box>This is a question for {name}</Box>;
    });

  const Number =
    overrides.Number ||
    (({ label, value, onChange }) => {
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
    });

  const Settings =
    overrides.Settings ||
    (({ onSubmit }) => {
      const [first, setFirst] = useState(10);
      const [second, setSecond] = useState(10);
      const [number, setNumber] = useState(10);

      const onChange = name => val =>
        ({
          first: setFirst,
          second: setSecond,
          number: setNumber,
        }[name](val));

      return (
        <Center>
          <Flex flexDir={'column'}>
            <Heading size="lg" textTransform={'capitalize'}>
              {name}
            </Heading>
            <form
              onSubmit={e => {
                e.preventDefault();
                onSubmit({ first: +first, second: +second });
              }}
            >
              <SimpleGrid spacing={5} py={10}>
                <Number
                  label={firstLabel}
                  value={first}
                  onChange={onChange('first')}
                />
                <Number
                  label={secondLabel}
                  value={second}
                  onChange={onChange('second')}
                />
                <Number
                  label={'Number of questions'}
                  value={number}
                  onChange={onChange('number')}
                />
                <Button type="submit">Start</Button>
              </SimpleGrid>
            </form>
          </Flex>
        </Center>
      );
    });

  return {
    firstLabel,
    secondLabel,
    name,
    color,
    Question,
    Number,
    Settings,
  };
};

export default base;
