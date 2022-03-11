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
import { Keyboard } from '../components/Keyboard';

const base = (overrides = {}) => {
  const name = overrides.name || 'base';
  const color = overrides.color || 'blue.500';
  const firstLabel = overrides.firstLabel || 'Max for the first number';
  const secondLabel = overrides.secondLabel || 'Max for the second number';
  const operator = overrides.operator || '+';

  const getNumber =
    overrides.getNumber ||
    (max => {
      const number = Math.floor(Math.random() * (max - 1)) + 1;
      return number;
    });

  const getAnswer =
    overrides.getAnswer ||
    ((first, second) => {
      // eslint-disable-next-line no-eval
      return '' + eval(`${first} ${operator} ${second}`);
    });

  const getQuestion =
    overrides.getQuestion ||
    ((firstMax, secondMax) => {
      const firstNumber = getNumber(firstMax);
      const secondNumber = getNumber(secondMax);
      return {
        answer: getAnswer(firstNumber, secondNumber),
        string: `${firstNumber} ${operator} ${secondNumber}`,
      };
    });

  const getQuestions =
    overrides.getQuestions ||
    (params => {
      const { first, second, number } = params;
      const questions = [];
      for (let i = 0; i < number; i++) {
        questions.push(getQuestion(first, second));
      }
      return questions;
    });

  const Question =
    overrides.Question ||
    (({ question, onNext }) => {
      const [answer, setAnswer] = useState('');

      const submit = () => {
        if (answer === question.answer) {
          onNext();
        }
      };

      const onChange = val => {
        setAnswer(val);
      };

      return (
        <Flex flexDir={'row'} gap={10}>
          <Flex flexDir={'column'}>
            <Center>
              <Heading as="h1" size="4xl" color={color}>
                {question.string}
              </Heading>
            </Center>
            <Button onClick={submit} mt={10}>
              Submit
            </Button>
          </Flex>
          <Flex flexDir="column">
            <NumberComponent
              label={'Answer'}
              onChange={onChange}
              value={answer}
              mb={1}
            />
            <Keyboard onChange={onChange} value={answer} />
          </Flex>
        </Flex>
      );
    });

  const NumberComponent =
    overrides.NumberComponent ||
    (({ label, value, onChange, ...rest }) => {
      return (
        <FormControl {...rest}>
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
                onSubmit({ first: +first, second: +second, number: +number });
              }}
            >
              <SimpleGrid spacing={5} py={10}>
                <NumberComponent
                  label={firstLabel}
                  value={first}
                  onChange={onChange('first')}
                />
                <NumberComponent
                  label={secondLabel}
                  value={second}
                  onChange={onChange('second')}
                />
                <NumberComponent
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

  const Play =
    overrides.Play ||
    (({ questions }) => {
      const [current, setCurrent] = useState(0);

      const onNext = () => {
        setCurrent(current + 1);
      };

      return (
        <Center>
          <Flex flexDir={'column'}>
            <Heading size="lg" textTransform={'capitalize'}>
              {name}
            </Heading>
            <Box py={10}>
              <Question question={questions[current]} onNext={onNext} />
            </Box>
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
    NumberComponent,
    Settings,
    Play,
    getNumber,
    getQuestions,
  };
};

export default base;
