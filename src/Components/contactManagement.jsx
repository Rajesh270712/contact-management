import { Box } from "@chakra-ui/react";

const ContactManagement = () => {
  return (
    <Box w="60%" m="auto" >
      <center><h1 style={{fontSize:"25px"}} >About Application</h1></center>
      <h2  style={{fontSize:"20px",marginTop:"20px"}}  >Tech Stack : React || CSS (Chakra UI) || JavaScript || HTML ||</h2>
      <h3  style={{fontSize:"18px" ,marginTop:"20px"}}  >
        Flow : When user he will be redirected to homepage where he can use two
        button homepage and contact List when user click on Contact List user
        will redirect to contact List url . I have user react router dom for
        routing .
      </h3>
      <h2 style={{fontSize:"18px" ,marginTop:"20px"}} >
        Contact List : Here will be two section one to add contact (toggle
        button) and second the table to show of contact List . Here I have added
        validation for phone number , email ,name . If they are not valid it
        will not be added in the application . All data is store in local
        storage and retrieved from local storage.
      </h2>
    </Box>
  );
};

export default ContactManagement;
