import ProductCart from "../ProductCart";
import { v4 as uuidv4 } from "uuid";
import CartTotal from "../CartTotal";

function Cart({ currentSale, setCurrentSale }) {
    const remove = (index) => {
        const removendo = currentSale.filter((item, i) => i !== index);
        setCurrentSale(removendo);
    };

    return (
        <section>
            <h2>Carrinho de compras</h2>
            <ul>
                {currentSale.length ? (
                    currentSale.map((product, index) => (
                        <ProductCart
                            id={index}
                            key={uuidv4()}
                            img={product.img}
                            name={product.name}
                            category={product.category}
                            callback={remove}
                        />
                    ))
                ) : (
                    <>
                        <h2>Sua sacola está vazia</h2>
                        <p>Adicionar itens</p>
                    </>
                )}
            </ul>
            {!!currentSale.length && (
                <CartTotal
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                />
            )}
        </section>
    );
}
export default Cart;
