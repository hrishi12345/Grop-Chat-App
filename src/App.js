import { Route, Routes } from "react-router-dom";

import SignUp from "./components/users/signup";
import Login from "./components/users/login";
import Home from "./components/Home/Home";
import Group from "./components/Home/Group";
function App() {
  return (
    
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Home />}/>
        <Route path="/group" element={<Group />} />
      </Routes>
   
  );
}

export default App;
