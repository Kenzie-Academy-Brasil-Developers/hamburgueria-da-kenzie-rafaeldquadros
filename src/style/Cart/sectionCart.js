import styled from "styled-components";

export const StyledCart = styled.section`
    width: 95%;
    min-width: 280px;
    max-width: 365px;
    min-height: 200px;

    padding: 20px 8px;

    /*Carrinho Vazio*/
    div {
        background-color: var(--color-primary);
        height: 60px;

        border-radius: 10px 10px 0 0;
    }
    div h2 {
        padding: 25px 20px;

        font-size: var(--title-size-3);
        font-weight: 700;

        color: #ffffff;
    }

    section {
        width: 100%;
        height: 150px;

        background-color: var(--color-grey-0);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    section h2 {
        font-size: var(--title-size-3);
        font-weight: 700;

        color: var(--color-grey-100);
    }
    section p {
        font-size: var(--text-caption);

        color: var(--color-grey-50);
    }

    /*CARRINHO COM ITENS*/
    ul {
        width: 100%;
        max-height: 200px;

        overflow: hidden;
        overflow-y: scroll;

        display: flex;
        flex-direction: column;
        gap: 10px;

        padding: 20px 0px;
    }

    li {
        width: 100%;
        height: 70px;

        display: flex;
        justify-content: space-between;
    }
    li figure {
        width: 70px;
        height: 70px;

        background-color: var(--color-grey-0);

        border-radius: 8px;
    }
    li figure img {
        width: 100%;
        height: 100%;
    }
    li div {
        background-color: #ffffff;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;

        padding: 5px;
    }
    li div h3 {
        color: var(--color-grey-100);

        font-size: var(--title-size-3);
        font-weight: 600;

        text-align: center;
    }
    li div span {
        font-size: var(--text-caption);

        color: var(--color-grey-50);
    }
    li button {
        height: 10px;

        font-size: var(--text-caption);

        background-color: #ffffff;
        color: var(--color-grey-4);

        border: none;

        cursor: pointer;
    }
`;
