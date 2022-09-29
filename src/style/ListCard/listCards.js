import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    gap: 15px;

    max-width: 95%;

    overflow-x: scroll;

    padding: 20px 0px;

    @media (min-width: 700px) {
        max-width: 950px;

        flex-wrap: wrap;

        overflow-x: none;
    }
`;
