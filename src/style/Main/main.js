import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 700px) {
        width: 85%;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        max-width: 1400px;
    }
`;
