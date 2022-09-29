import Products from "../Products";
import { v4 as uuidv4 } from "uuid";

function ProductsList({ products, callback }) {
    return (
        <ul>
            {products.map((product) => {
                return (
                    <Products
                        key={uuidv4()}
                        img={product.img}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        id={product.id}
                        callback={callback}
                    />
                );
            })}
        </ul>
    );
}
export default ProductsList;
