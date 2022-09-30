import Products from "../Products";
import { v4 as uuidv4 } from "uuid";
import { StyledList } from "../../style/ListCard/listCards";

function ProductsList({ products, callback }) {
    return (
        <StyledList>
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
        </StyledList>
    );
}
export default ProductsList;
