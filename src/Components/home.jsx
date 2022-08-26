import { Button, HStack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ContactManagement from './contactManagement';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <center>
          <Text fontSize="4xl" fontFamily="cursive" color="red">
            React Application
          </Text>
        </center>
        <HStack m="30px" justifyContent="space-evenly">
          <Button
            onClick={() => navigate('/')}
            colorScheme="whatsapp"
          >
            Home Page
          </Button>
          <Button
            onClick={() => navigate('/contactList')}
            colorScheme="whatsapp"
          >
            Contact List Page
          </Button>
        </HStack>
        <ContactManagement />
      </div>
    </div>
  );
};

export default HomePage;
