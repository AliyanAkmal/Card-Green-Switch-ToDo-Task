import React from "react";
import { Progress, Stack } from "@chakra-ui/react";

const ProgressLine = () => {
  return (
    <>
      <div style={{ padding: "20px 20px", background: "#1A202C" }}>
        <Progress hasStripe value={50} isAnimated />
        <br />
        <Progress value={80} isIndeterminate />
      </div>
      <Stack spacing={5}>
        <Progress colorScheme="green" size="sm" value={20} />
        <Progress colorScheme="green" size="md" value={20} />
        <Progress colorScheme="green" size="lg" value={20} />
        <Progress
          colorScheme="green"
          height="32px"
          value={20}
          isIndeterminate
        />
      </Stack>
    </>
  );
};

export default ProgressLine;
