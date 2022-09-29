import { StyledButton } from "../../style/Button/button";
import { StyledCard } from "../../style/Card/card";
import { StyledTitle } from "../../style/Title/Title";

function Products({ img, name, category, price, id, callback }) {
    return (
        <StyledCard id={id}>
            <figure>
                <img src={img} alt="" />
            </figure>
            <div>
                <StyledTitle>{name}</StyledTitle>
                <span>{category}</span>
                <p>
                    {price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
                <StyledButton onClick={() => callback(id)}>
                    Adicionar
                </StyledButton>
            </div>
        </StyledCard>
    );
}
export default Products;
