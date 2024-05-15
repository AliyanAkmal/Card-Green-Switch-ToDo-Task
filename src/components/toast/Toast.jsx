import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";

const ToastComp = () => {
  const toast = useToast();
  return (
    <>
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
      <br />
      <br />
      <Button
        onClick={() => {
          // Create an example promise that resolves in 5s
          const examplePromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 3000);
          });

          // Will display the loading toast until the promise is either resolved
          // or rejected.
          toast.promise(examplePromise, {
            success: { title: "Promise resolved", description: "Looks great" },
            error: {
              title: "Promise rejected",
              description: "Something wrong",
            },
            loading: { title: "Promise pending", description: "Please wait" },
          });
        }}
      >
        Show Toast
      </Button>
      <br />
      <br />
      <Button
        onClick={() =>
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="white" p={3} bg="blue.500">
                Hello World
              </Box>
            ),
          })
        }
      >
        Show Toast
      </Button>
    </>
  );
};

export default ToastComp;
