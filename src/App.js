import { Route, Routes } from "react-router-dom";

import SignUp from "./components/users/signup";
import Login from "./components/users/login";
function App() {
  return (
    
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
   
  );
}

export default App;
