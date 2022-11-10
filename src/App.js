import { Routes, Route } from "react-router-dom";
import './App.css';
import Button from "./button";
import Cards from "./cards";
import Badge from "./badge";

function App() {
  return (
    <Routes>
    <Route path="/button" element={<Button />}>  </Route>
    <Route path="/cards" element={<Cards />}>  </Route>
    <Route path="/badge" element={<Badge />}>  </Route>
      
    
  </Routes>
  );
}

export default App;
