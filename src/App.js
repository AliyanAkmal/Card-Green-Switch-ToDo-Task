import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./routes";

function App() {
  return (
    <>
      {/* <Wrapper> */}
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
      {/* </Wrapper> */}
    </>
  );
}

export default App;
