import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import store from "app/store";
import routes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
      <Toaster />
    </Provider>
  );
}

export default App;
