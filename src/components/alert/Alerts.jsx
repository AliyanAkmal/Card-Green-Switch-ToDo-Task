import React, { useState } from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CircularProgressLabel,
} from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";
const AlertsComp = () => {
  const [circle, setCircle] = useState(false);
  setTimeout(() => {
    setCircle(true);
  }, 5000);
  return (
    <>
      <Alert status="info" variant="top-accent">
        <AlertIcon />
        <AlertTitle>Alert Component</AlertTitle>
        <AlertDescription>This is an Alert Component</AlertDescription>
      </Alert>
      <br />

      {!circle ? (
        <div style={{ textAlign: "center" }}>
          <CircularProgress
            value={99}
            color="#2F855A"
            size="60px"
            isIndeterminate
            p="10px"
          >
            <CircularProgressLabel fontWeight="bold" fontSize="14px">
              99%
            </CircularProgressLabel>
          </CircularProgress>
        </div>
      ) : (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Application submitted successfully!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your application. Our team will get back to
            you soon.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default AlertsComp;
