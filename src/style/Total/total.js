import styled from "styled-components";

export const StyledTotal = styled.section`
    width: 95%;
    max-width: 365px;
    height: 100px;
    border-top: 2px solid var(--color-grey-20);
    margin-bottom: 20px;

    div {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
    }
    div h2 {
        font-size: var(--title-size-4);
        font-weight: 600;
    }
    div p {
        font-size: var(--title-size-4);
        color: var(--color-grey-50);
    }

    button {
        width: 100%;
        height: 50px;

        color: var(--color-grey-50);
        background-color: var(--color-grey-20);

        border: none;
        border-radius: 8px;

        font-size: 16px;
        font-weight: 550;

        cursor: pointer;
    }
    button:hover {
    }
`;
