import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.tsx";
import Footer from "./components/Footer.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <div className="flex flex-col h-full justify-between">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/:id" element={<ProductDetails />} />
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    </>
  )
}

export default App
