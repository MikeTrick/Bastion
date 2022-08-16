import './App.scss';

import {Header} from "./components/Header/Header";
import {CatalogBody} from "./components/CatalogBody/CatalogBody";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Products} from "./components/Products";
import {ProductsTypes} from "./components/ProductsTypes/ProductsTypes";
import {Cart} from "./components/Cart/Cart";

function App() {
    return (
        <div className="app-wrapper">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route
                        path='/'
                        element={<CatalogBody/>}
                    />
                    <Route
                        path='/products'
                        element={<Products/>}
                    />
                    <Route path='/types'
                           element={<ProductsTypes />}
                    />
                    <Route path='/cart'
                           element={<Cart />}/>
                </Routes>
            </BrowserRouter>
            {/*<Cart/>*/}
        </div>);
}

export default App;
