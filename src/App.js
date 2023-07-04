import { Route, Routes } from "react-router-dom";

import SignUp from "./components/users/signup";
import Login from "./components/users/login";
import Home from "./components/Home/Home";
function App() {
  return (
    
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Home />}/>
      </Routes>
   
  );
}

export default App;
