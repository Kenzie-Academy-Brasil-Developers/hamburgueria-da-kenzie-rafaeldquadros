import ProductCart from "../ProductCart";
import { v4 as uuidv4 } from "uuid";
import CartTotal from "../CartTotal";
import { StyledCart } from "../../style/Cart/sectionCart";

function Cart({ currentSale, setCurrentSale }) {
    const remove = (index) => {
        const removendo = currentSale.filter((item, i) => i !== index);
        setCurrentSale(removendo);
    };

    return (
        <div style={{ width: "95%", maxWidth: "365px" }}>
            <StyledCart>
                <div>
                    <h2>Carrinho de compras</h2>
                </div>

                {currentSale.length ? (
                    <ul>
                        {currentSale.map((product, index) => (
                            <ProductCart
                                id={index}
                                key={uuidv4()}
                                img={product.img}
                                name={product.name}
                                category={product.category}
                                callback={remove}
                            />
                        ))}
                    </ul>
                ) : (
                    <section>
                        <h2>Sua sacola está vazia</h2>
                        <p>Adicionar itens</p>
                    </section>
                )}
            </StyledCart>

            {!!currentSale.length && (
                <CartTotal
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                />
            )}
        </div>
    );
}
export default Cart;
