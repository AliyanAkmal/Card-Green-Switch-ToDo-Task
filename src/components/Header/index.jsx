import React, { useState } from "react";
import "./style.css";
import image from "../../assets/cardImgs/cardFive.avif";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Box,
  useToast,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import {
  Menu,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import AvatarFromLocal from "../Avatar";
import { Link } from "react-router-dom";
import MenuComp from "../menu/MenuComp";

function Header() {
  const toast = useToast();
  //////////////////////////////////
  const [username, setUsername] = useState({
    name: "aliyan",
    password: "2233",
  });
  ///////////////////////////////////////
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  //////////////////
  const [inputName, setInput] = useState("");
  const [password, setPassword] = useState("");
  ///////////////////////////

  ////////////////////////////
  const [profile, setProfile] = useState();
  const handleOnChangeName = (e) => {
    setInput(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  /////////////////////////
  const handleOnSave = () => {
    if (inputName === username.name && password === username.password) {
      setProfile(image);
      onClose();
      toast({
        title: "Signed in successfully",
        // description: "We've created your account for you.",
        status: "success",
        duration: 2000,
        // isClosable: true,
        colorScheme: "blue",
      });
    }
  };
  //////////////////////
  const handleSignOut = () => {
    setProfile(null);
    toast({
      title: "You have been signed out",
      // description: "We've created your account for you.",
      status: "success",
      duration: 2000,
      // isClosable: true,
      colorScheme: "red",
    });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          padding: "20px 25px",
        }}
      >
        <div style={{ display: "flex", gap: "2rem" }}>
          <p>
            <Link style={links.allLinks} to="/">
              Buy Cards
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="main">
              Main
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="list">
              List
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="ui">
              Ui
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="accordian">
              accordian
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="tabs">
              Table Tabs
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="visual">
              Visual BTN
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="alert">
              Alert
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="line">
              Progress Line
            </Link>
          </p>
          <p>
            <Link style={links.allLinks} to="drawer">
              Drawer
            </Link>
          </p>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {" "}
          <p style={{ fontSize: "14px" }}>Gmail</p>
          <p style={{ fontSize: "14px" }}>Images</p>
          <MenuComp />
          {profile !== image ? (
            <Avatar src="https://bit.ly/broken-link" onClick={onOpen} />
          ) : (
            <AvatarFromLocal
              src={profile}
              alt="Profile"
              onClick={onOpen}
              ref={btnRef}
            />
          )}
          {profile !== image ? (
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Sign in to your Account</DrawerHeader>

                <DrawerBody>
                  <Input
                    placeholder="Email "
                    mb={4}
                    onChange={handleOnChangeName}
                  />
                  <Input
                    placeholder="Password"
                    onChange={handleOnChangePassword}
                  />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue" onClick={handleOnSave}>
                    Sign In
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ) : (
            <Box pos="absolute" right="15%" top="5%">
              <Menu isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
                <MenuList>
                  <MenuGroup title="Setting">
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Help">
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Box>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;

////////////
const links = {
  allLinks: {
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
    color: "black",
  },
  // menu: {
  //   // position: "absolute",
  //   // right: "100%",
  //   background: "red",
  // },
};
