import styled from "styled-components";

export const StyledCard = styled.li`
    min-width: 300px;
    max-width: 300px;
    height: 346px;

    border: 2px solid var(--color-grey-20);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    figure {
        width: 100%;
        max-height: 50%;

        overflow: hidden;

        display: flex;
        justify-content: center;

        background-color: var(--color-grey-0);
    }
    figure img {
        width: 177px;
        height: 100%;
    }

    div {
        margin: auto;

        width: 90%;
        height: 150px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        justify-content: space-around;
    }

    span {
        font-size: var(--text-caption);

        color: var(--color-grey-50);
    }
    p {
        font-size: var(--title-size-4);
        font-weight: 500;

        color: var(--color-primary);
    }
`;
