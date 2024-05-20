import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Image,
} from "@chakra-ui/react";

import { TbGridDots } from "react-icons/tb";
import mapImg from "../../assets/hamImgs/google-map-icon.png";
import email from "../../assets/hamImgs/4202011_email_gmail_mail_logo_social_icon.png";
import playStore from "../../assets/hamImgs/vecteezy_google-play-store-icon-logo-symbol_22484511.png";
import youtube from "../../assets/hamImgs/pngegg.png";

const MenuComp = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<TbGridDots />}
        variant="outline"
      />
      <MenuList
        sx={{
          display: "flex",
          background: "#313C4C",
          flexWrap: "wrap",
          gap: "0.2rem",
        }}
      >
        <Box>
          <MenuItem background="transparent">
            <a href="https://www.googlemaps.com" target="_blank">
              <Image
                boxSize="2rem"
                src={mapImg}
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
            </a>
          </MenuItem>
        </Box>
        <Box>
          <MenuItem background="transparent">
            <a href="https://mail.google.com" target="_blank">
              <Image
                boxSize="2rem"
                src={email}
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
            </a>
          </MenuItem>
        </Box>
        <Box>
          <MenuItem background="transparent">
            <a
              href="https://play.google.com/store/games?device=windows"
              target="_blank"
            >
              <Image
                boxSize="2rem"
                src={playStore}
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
            </a>
          </MenuItem>
        </Box>
        <Box>
          <MenuItem background="transparent">
            <a href="https://www.youtube.com" target="_blank">
              <Image
                boxSize="2rem"
                src={youtube}
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
            </a>
          </MenuItem>
        </Box>
      </MenuList>
    </Menu>
  );
};

export default MenuComp;
