import Logo from "../../assets/Mask Group.png";
import { StyledButton } from "../../style/Button/button";
import { StyledHeader } from "../../style/Header/header";
function Header({ products, setFilteredProducts, setCurrentPesquisa }) {
    const filtered = (event) => {
        event.preventDefault();

        const pesquisa = products.filter(
            (product) =>
                product.category.toLowerCase() ===
                    event.target.children[0].value.toLowerCase() ||
                product.name.toLowerCase() ===
                    event.target.children[0].value.toLowerCase()
        );
        setCurrentPesquisa(event.target.children[0].value);
        setFilteredProducts(pesquisa);
    };
    return (
        <StyledHeader>
            <div>
                <img src={Logo} alt="Logo Burger Kenzie" />
                <form onSubmit={filtered}>
                    <input type="text" placeholder="Digitar pesquisa" />
                    <StyledButton type="submit">Pesquisar</StyledButton>
                </form>
            </div>
        </StyledHeader>
    );
}
export default Header;
