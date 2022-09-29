import Products from "../Products";
import { v4 as uuidv4 } from "uuid";
import { StyledPesquisa } from "../../style/Pesquisa/pesquisa";
import { StyledButton } from "../../style/Button/button";
import { StyledList } from "../../style/ListCard/listCards";

function Pesquisa({
    filteredProducts,
    callback,
    currentPesquisa,
    setFilteredProducts,
}) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "100%",
            }}
        >
            <StyledPesquisa>
                <div className="container">
                    <div>
                        <h2>Resultados para:</h2>
                        <p>{currentPesquisa}</p>
                    </div>
                    <StyledButton onClick={() => setFilteredProducts([])}>
                        Limpar pesquisa
                    </StyledButton>
                </div>
            </StyledPesquisa>
            <StyledList>
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
            </StyledList>
        </div>
    );
}

export default Pesquisa;
