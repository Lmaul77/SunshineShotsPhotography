import React from 'react';
import { RatesContainer, CollectionGrid, CollectionCard, CollectionTitle, PriceTag, CollectionList, CollectionName } from './WeddingRatesStyle'

// Component
const WeddingRates = () => {
    const collections = [
        {
            name: "Luminescent Collection",
            price: "$2,000",
            details: ["8 hours", "2 photographers", "All edited images", "1 framed print"]
        },
        {
            name: "Candescent Collection",
            price: "$1,500",
            details: ["6 hours", "1 photographer", "200 images", "1 framed print"]
        },
        {
            name: "Golden Collection",
            price: "$1,000",
            details: ["3 hours", "1 photographer", "100 photos"]
        },
        {
            name: "Beaming Elopments",
            price: "$500",
            details: ["All photos", "1 framed print"]
        }
    ];

    return (
        <RatesContainer>
            <CollectionTitle>Wedding Collections</CollectionTitle>
            <CollectionGrid>
                {collections.map((collection, index) => (
                    <CollectionCard key={index}>
                        <CollectionName>{collection.name}</CollectionName>
                        <PriceTag>Price: {collection.price}</PriceTag>
                        <CollectionList>
                            {collection.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </CollectionList>
                    </CollectionCard>
                ))}
            </CollectionGrid>
        </RatesContainer>
    );
}

export default WeddingRates;
