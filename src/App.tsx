import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main"
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import "./App.scss";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App;