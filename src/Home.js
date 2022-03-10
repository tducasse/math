import { Box, Center, Flex, SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getConfig, moduleNames } from './modules';

export const Home = props => {
  return (
    <Box flex={1}>
      <Center>
        <SimpleGrid columns={2} spacing={10}>
          {moduleNames.map(name => (
            <Card key={name} name={name} />
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};

const Card = ({ name }) => {
  const { color } = getConfig(name);
  const navigate = useNavigate();
  return (
    <Flex
      as={'button'}
      alignItems="center"
      justifyContent="center"
      borderWidth={'1px'}
      borderRadius={'lg'}
      w={150}
      h={150}
      bg={color}
      fontSize={'xl'}
      _active={{
        bg: 'gray.200',
        transform: 'scale(1.1)',
        color: 'gray.900',
      }}
      onClick={() => {
        navigate(`/${name}`);
      }}
    >
      {name}
    </Flex>
  );
};
