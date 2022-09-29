import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: var(--color-primary);
    color: #ffffff;

    width: 80px;
    height: 30px;

    border: none;
    border-radius: 8px;

    text-align: center;

    cursor: pointer;

    :hover {
        background-color: var(--color-primary-50);
    }
`;
