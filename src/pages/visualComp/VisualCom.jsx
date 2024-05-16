import React from "react";
import { Button, Checkbox, VisuallyHidden } from "@chakra-ui/react";

const VisualCom = () => {
  return (
    <Button>
      <VisuallyHidden>Checkmark</VisuallyHidden>
      <Checkbox />
    </Button>
  );
};

export default VisualCom;
