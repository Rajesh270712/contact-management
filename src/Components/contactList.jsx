import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ContactList = ({ allContacts }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    let contacts = JSON.parse(localStorage.getItem('userData'));
    setUserData(contacts);
  }, [allContacts]);
  return (
    <div>
      {userData ? (
        <Text margin="20px 11%"> Total Contacts : {userData.length} </Text>
      ) : null}
      <TableContainer w="80%" m="40px auto 100px auto">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Sr. No</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Mobile</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData?.map((user, index) => (
              <Tr key={index + 1}>
                <Td>{index + 1}</Td>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.mobile}</Td>
                <Td>{user.emailId}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ContactList;
