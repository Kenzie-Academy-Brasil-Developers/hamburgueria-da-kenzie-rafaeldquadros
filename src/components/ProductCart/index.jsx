function ProductCart({ id, img, name, category, callback }) {
    return (
        <li id={id}>
            <img src={img} alt="Imagem Produto" />
            <h2>{name}</h2>
            <span>{category}</span>
            <button onClick={() => callback(id)} id={id}>
                remover
            </button>
        </li>
    );
}
export default ProductCart;
