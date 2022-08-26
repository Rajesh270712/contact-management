import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactList from './contactList';
import HomePage from './home';

const Contact = () => {
  const [allContacts, setAllContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    emailId: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // destructuring name
  const { firstName, lastName, mobile, emailId } = userData;

  // handle Change
  const handleInputChange = e => {
    const { name, value } = e.target;
    setError('');
    setUserData({ ...userData, [name]: value });
  };

  // handle submit
  const handleSubmit = () => {
    if (userData.firstName.length === 0) {
      // mobile validate (length==10)
      setError('Please Enter First Name');
    } else if (userData.lastName.length === 0) {
      // mobile validate (length==10)
      setError('Please Enter Last Name');
    } else if (userData.mobile.length !== 10) {
      // mobile validate (length==10)
      setError('Invalid Mobile Number');
    } else if (
      // email validate (Email should include @ & .com)
      !(
        userData.emailId.includes('@') &&
        userData.emailId.includes('.com') &&
        userData.emailId.length >= 8
      )
    ) {
      setError('Invalid Email Id');
    } else {
      // adding to localStorage;
      let userDataInLocalStorage =
        JSON.parse(localStorage.getItem('userData')) || [];
      userDataInLocalStorage.push(userData);
      localStorage.setItem('userData', JSON.stringify(userDataInLocalStorage));
      setAllContacts(userDataInLocalStorage);
    }
  };

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
      </div>
      <Button
        m="10px 15%"
        onClick={() => setShowForm(!showForm)}
        colorScheme="blue"
      >
        Add Contact
      </Button>
      {showForm ? (
        <FormControl w="70%" m=" 70px auto" isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            placeholder="First name"
          />
          <FormLabel>Last name</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            placeholder="Last name"
          />
          <FormLabel>Mobile Number</FormLabel>
          <Input
            type="number"
            name="mobile"
            value={mobile}
            onChange={handleInputChange}
            placeholder="Mobile Number"
          />
          <FormLabel>Email ID</FormLabel>
          <Input
            type="email"
            name="emailId"
            value={emailId}
            onChange={handleInputChange}
            placeholder="Email ID"
          />
          <h2 style={{ color: 'red' }}>{error}</h2>
          <Button
            display="block"
            w="70%"
            m=" 20px auto"
            borderRadius="50px"
            colorScheme="linkedin"
            onClick={handleSubmit}
            disabled={error != ''}
          >
            Save
          </Button>
        </FormControl>
      ) : null}
      <ContactList allContacts={allContacts} />
    </div>
  );
};

export default Contact;
