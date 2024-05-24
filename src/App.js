import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./routes";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      {/* <Wrapper> */}
      <ChakraProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ChakraProvider>
      {/* </Wrapper> */}
    </>
  );
}

export default App;
