import { Button, SimpleGrid } from '@chakra-ui/react';

export const Keyboard = ({ onChange, value }) => {
  const handleChange = val => {
    onChange(value + val);
  };

  const erase = () => {
    onChange(value.slice(0, -1));
  };

  const styles = {
    width: 75,
    height: 75,
    variant: 'outline',
    fontSize: '4xl',
  };

  return (
    <SimpleGrid columns={3} spacing={1}>
      <Button onClick={() => handleChange('7')} {...styles}>
        7
      </Button>
      <Button onClick={() => handleChange('8')} {...styles}>
        8
      </Button>
      <Button onClick={() => handleChange('9')} {...styles}>
        9
      </Button>
      <Button onClick={() => handleChange('4')} {...styles}>
        4
      </Button>
      <Button onClick={() => handleChange('5')} {...styles}>
        5
      </Button>
      <Button onClick={() => handleChange('6')} {...styles}>
        6
      </Button>
      <Button onClick={() => handleChange('1')} {...styles}>
        1
      </Button>
      <Button onClick={() => handleChange('2')} {...styles}>
        2
      </Button>
      <Button onClick={() => handleChange('3')} {...styles}>
        3
      </Button>
      <Button onClick={() => handleChange('.')} {...styles}>
        .
      </Button>
      <Button onClick={erase} {...styles}>
        C
      </Button>
    </SimpleGrid>
  );
};
