import Products from "../Products";
import { v4 as uuidv4 } from "uuid";

function Pesquisa({
    filteredProducts,
    callback,
    currentPesquisa,
    setFilteredProducts,
}) {
    return (
        <>
            <h2>Resultados da pesquisa por:{currentPesquisa} </h2>
            <button onClick={() => setFilteredProducts([])}>
                Limpar pesquisa
            </button>
            <ul>
                {filteredProducts.map((product) => (
                    <Products
                        key={uuidv4()}
                        img={product.img}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        id={product.id}
                        callback={callback}
                    />
                ))}
            </ul>
        </>
    );
}

export default Pesquisa;
