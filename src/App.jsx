import "./App.css";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Pesquisa from "./components/Pesquisa";
import Cart from "./components/Cart";

import { useEffect, useState } from "react";
import { StyledMain } from "./style/Main/main";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentSale, setCurrentSale] = useState([]);
    const [currentPesquisa, setCurrentPesquisa] = useState("");

    function handdleClick(id) {
        const productCart = products.find((product) => product.id === id);
        const productCartIncludes = currentSale.find(
            (product) => product.id === id
        );
        if (productCart && !productCartIncludes) {
            setCurrentSale([...currentSale, productCart]);
        } else {
            toast.error("Este item já está no carrinho");
        }
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
            <StyledMain>
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
                <Cart
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                />
            </StyledMain>
            <ToastContainer />
        </div>
    );
}

export default App;
