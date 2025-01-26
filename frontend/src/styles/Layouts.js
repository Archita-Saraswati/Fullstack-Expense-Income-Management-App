import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;

    @media screen and (max-width: 770px) {
        display: flex;
        flex-direction: column;
    }
`;

export const InnerLayout = styled.div`
    padding: 2rem 1.5rem;
    width: 100%;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-buttom: 40px;
    }
`;