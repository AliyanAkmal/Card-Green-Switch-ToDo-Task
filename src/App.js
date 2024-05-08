import { RouterProvider } from "react-router-dom";

import router from "./routes";

function App() {
  return (
    <>
      {/* <Wrapper> */}
      <RouterProvider router={router} />
      {/* </Wrapper> */}
    </>
  );
}

export default App;
