import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Global/Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
