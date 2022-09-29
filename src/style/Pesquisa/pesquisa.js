import styled from "styled-components";

export const StyledPesquisa = styled.section`
    width: 100%;
    height: 60px;
    .container {
        width: 100%;
        height: 70px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    @media (min-width: 700px) {
        .container {
            max-width: 942px;

            justify-content: space-between;
        }
    }
    .container h2 {
        font-size: var(--title-size-2);
        font-weight: 700;
    }
    .container p {
        font-size: var(--title-size-2);
        font-weight: 700;

        color: var(--color-grey-20);
    }

    .container button {
        display: none;
    }
    @media (min-width: 700px) {
        .container button {
            display: block;
            width: fit-content;
        }
        .container div {
            display: flex;
            gap: 10px;
        }
    }
`;
