import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;

    height: 100px;

    background-color: var(--color-grey-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
        width: 100%;
        max-width: 1400px;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    @media (min-width: 700px) {
        div {
            width: 85%;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    img {
        width: 150px;
        height: 23px;
    }

    form {
        width: 100%;
        max-width: 382px;
        display: flex;
        justify-content: center;

        position: relative;
    }

    input {
        width: 90%;
        height: 40px;

        border-radius: 8px;
        border: 2px solid var(--color-grey-20);
        color: var(--color-grey-50);

        outline-color: var(--color-grey-100);
    }
    input::placeholder {
        padding: 20px;
    }

    button {
        position: absolute;
        right: 6%;
        top: 18%;
    }
`;
