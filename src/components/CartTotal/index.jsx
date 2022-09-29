import { StyledTotal } from "../../style/Total/total";

function CartTotal({ currentSale, setCurrentSale }) {
    const totalCart = currentSale.reduce(
        (cur, acc) => cur + Number(acc.price),
        0
    );
    return (
        <StyledTotal>
            <div>
                <h2>Total</h2>
                <p>
                    {totalCart.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
            </div>
            <button onClick={() => setCurrentSale([])}>Remover todos</button>
        </StyledTotal>
    );
}
export default CartTotal;
