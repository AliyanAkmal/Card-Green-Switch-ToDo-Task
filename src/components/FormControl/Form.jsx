import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Form = ({
  onClose,
  handleSave,
  setName,
  setEmail,
  setPassword,
  name,
  email,
  password,
}) => {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSaveData = () => {
    const data = { name, email, password };
    handleSave(data);
  };
  ///////////////////////////////
  return (
    <FormControl isRequired>
      <Box>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="username"
          value={name}
          onChange={handleNameChange}
        />
      </Box>
      <Box pt={3}>
        <FormLabel>Email</FormLabel>
        <Input placeholder="email" value={email} onChange={handleEmailChange} />
      </Box>
      <Box pt={3}>
        <FormLabel>Password</FormLabel>
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          isRequired
        />
      </Box>

      <Button variant="outline" mr={3} onClick={onClose}>
        Cancel
      </Button>
      <Button colorScheme="blue" onClick={handleSaveData}>
        Save
      </Button>
    </FormControl>
  );
};

export default Form;
