import { Box, Center, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { modules } from '../modules';

export const Home = () => {
  return (
    <Box flex={1}>
      <Center>
        <Flex px={10} flexWrap={'wrap'}>
          {Object.keys(modules).map(name => (
            <Card key={name} name={name} />
          ))}
        </Flex>
      </Center>
    </Box>
  );
};

const Card = ({ name }) => {
  const { color } = modules[name];
  const navigate = useNavigate();
  return (
    <Flex
      as={'button'}
      alignItems="center"
      justifyContent="center"
      borderWidth={'1px'}
      borderRadius={'lg'}
      mr={10}
      mb={10}
      height={150}
      width={150}
      bg={color}
      fontSize={'xl'}
      _active={{
        bg: 'gray.200',
        transform: 'scale(1.1)',
        color: 'gray.900',
      }}
      onClick={() => {
        navigate(`/${name}/settings`);
      }}
    >
      {name}
    </Flex>
  );
};
