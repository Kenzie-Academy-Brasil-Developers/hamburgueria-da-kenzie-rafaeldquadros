function ProductCart({ id, img, name, category, callback }) {
    return (
        <li id={id}>
            <figure>
                <img src={img} alt="Imagem Produto" />
            </figure>
            <div>
                <h3>{name}</h3>
                <span>{category}</span>
            </div>
            <button onClick={() => callback(id)} id={id}>
                Remover
            </button>
        </li>
    );
}
export default ProductCart;
