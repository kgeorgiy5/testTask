import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ProductList />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
