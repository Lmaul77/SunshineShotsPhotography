import styled from 'styled-components';

export const RatesContainer = styled.div`
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    background: linear-gradient(#FFFFFF, #feb6b7); /* Linear gradient background */
`;

export const CollectionGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
    gap: 20px;
    width: 90%;
    margin: auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 90%;
    }
`;

export const CollectionCard = styled.div`
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center; /* Center content */
`;

export const CollectionTitle = styled.h2`
    font-family: 'Dancing Script', cursive;
    font-style: italic;
    text-align: center;
    color: black;
    font-size: 4em;
    opacity: 0.7;
`;

export const PriceTag = styled.p`
    font-weight: 600; /* Semi-bold font weight */
    /* Add any other styling you need for the price tag */
`;


export const CollectionList = styled.ul`
    list-style-type: none; /* Remove bullet points */
    padding: 10px;
`;

export const CollectionName = styled.h3`
    font-family: 'Dancing Script', cursive;
    font-size: 3em; /* Set font size to 3em */
    font-weight: 300;
    text-align: center;
    color: black;
    opacity: 0.7;
`;