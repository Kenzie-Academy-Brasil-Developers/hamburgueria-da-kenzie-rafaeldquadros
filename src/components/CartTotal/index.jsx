function CartTotal({ currentSale, setCurrentSale }) {
    const totalCart = currentSale.reduce(
        (cur, acc) => cur + Number(acc.price),
        0
    );
    return (
        <section>
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
        </section>
    );
}
export default CartTotal;
