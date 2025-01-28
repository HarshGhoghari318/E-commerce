
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Context from "./utils/Context.jsx";
import UserContext from "./utils/UserContext.jsx"; // Corrected import

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Context>
    
    <UserContext>
      <App />
    </UserContext>
  </Context>
  </BrowserRouter>
);
