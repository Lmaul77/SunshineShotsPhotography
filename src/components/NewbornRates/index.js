import React from 'react';
import { RatesContainer, CollectionGrid, CollectionCard, CollectionTitle, PriceTag, CollectionList, CollectionName, OptionCard, OptionsContainer } from './NewbornRatesStyle'

// Component
const NewbornRates = () => {
    const newbornCollections = [
        {
            name: "Newborns",
            options: [
                {
                    name: "Option 1",
                    price: "$200",
                    details: ["30 Minutes Shoot Time", "2 Outfits + Diaper(or bummy)", "Digital Gallery"]
                },
                {
                    name: "Option 2",
                    price: "$400",
                    details: ["1 Hour Shoot Time", "2 Outfits + Diaper(or bummy)", "Digital Gallery"]
                }
            ]
        }
    ];
    

    return (
        <RatesContainer>
            <CollectionTitle>Newborn Collection</CollectionTitle>
            <CollectionGrid>
                {newbornCollections.map((collection, index) => (
                    <CollectionCard key={index}>
                        <CollectionName>{collection.name}</CollectionName>
                        {collection.options ? (
                            <OptionsContainer>
                                {collection.options.map((option, optionIndex) => (
                                    <OptionCard key={optionIndex}>
                                        <PriceTag>Price: {option.price}</PriceTag>
                                        <CollectionList>
                                            {option.details.map((detail, detailIndex) => (
                                                <li key={detailIndex}>{detail}</li>
                                            ))}
                                        </CollectionList>
                                    </OptionCard>
                                ))}
                            </OptionsContainer>
                        ) : (
                            <>
                                <PriceTag>Price: {collection.price}</PriceTag>
                                <CollectionList>
                                    {collection.details.map((detail, detailIndex) => (
                                        <li key={detailIndex}>{detail}</li>
                                    ))}
                                </CollectionList>
                            </>
                        )}
                    </CollectionCard>
                ))}
            </CollectionGrid>
        </RatesContainer>
    );
}

export default NewbornRates;
