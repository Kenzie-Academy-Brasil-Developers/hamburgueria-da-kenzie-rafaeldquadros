import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Pesquisa from "./components/Pesquisa";
import Cart from "./components/Cart";

import { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([]);
    const [currentPesquisa, setCurrentPesquisa] = useState("");

    function handdleClick(id) {
        products.find(
            (product) =>
                product.id === id && setCurrentSale([...currentSale, product])
        );
    }

    useEffect(() => {
        fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
            .then((res) => res.json())
            .then((res) => setProducts(res));
    }, []);

    return (
        <div className="App">
            <Header
                products={products}
                setFilteredProducts={setFilteredProducts}
                setCurrentPesquisa={setCurrentPesquisa}
            />
            {filteredProducts.length ? (
                <Pesquisa
                    filteredProducts={filteredProducts}
                    callback={handdleClick}
                    currentPesquisa={currentPesquisa}
                    setFilteredProducts={setFilteredProducts}
                />
            ) : (
                <ProductsList products={products} callback={handdleClick} />
            )}
            <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </div>
    );
}

export default App;
