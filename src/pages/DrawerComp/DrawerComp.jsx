import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import Form from "../../components/FormControl/Form";
import FormCard from "../../components/FormCard/FormCard";

const DrawerComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  ////////////////////////////////
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /////////////////////////////////
  const [boxState, setBoxState] = useState([]);
  //////////////////////////////////(
  const handleSave = (data) => {
    if (data.name !== "" && data.password !== "" && data.email !== "") {
      setBoxState((prev) => [...prev, data]);
      setName("");
      setEmail("");
      setPassword("");
      onClose();
    }
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Create account
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Form
              onClose={onClose}
              handleSave={handleSave}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              name={name}
              email={email}
              password={password}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {boxState.map((data, index) => {
          return <FormCard key={index} {...data} />;
        })}
      </Box>
    </>
  );
};

export default DrawerComp;

// const style = {
//   box: {
//     border: "1px solid black",
//   },
// };
