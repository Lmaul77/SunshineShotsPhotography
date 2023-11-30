import React from 'react';
import { RatesContainer, CollectionGrid, CollectionCard, CollectionTitle, PriceTag, CollectionList, CollectionName, OptionCard, OptionsContainer } from './PortraitRatesStyle'

// Component
const PortraitRates = () => {
    const portraitCollections = [
        {
            name: "Mini",
            price: "$100",
            details: ["10 Photos", "15 Minutes", "Digital Gallery"]
        },
        {
            name: "Engagement",
            options: [
                {
                    name: "Option 1",
                    price: "$150",
                    details: ["20 photos", "1 Hour Shoot Time", "Digital Gallery"]
                },
                {
                    name: "Option 2",
                    price: "$200",
                    details: ["Unlimited Photos", "1-2 Hour Shoot Time", "Digital Gallery"]
                }
            ]
        },
        {
            name: "Full Session",
            options: [
                {
                    name: "Option 1",
                    price: "$150",
                    details: ["15 Photos", "30 Minutes", "Digital Gallery"]
                },
                {
                    name: "Option 2",
                    price: "$250",
                    details: ["Unlimited Photos", "1-2 Hour Shoot Time", "Digital Gallery"]
                }
            ]
        },
        {
            name: "Boudoir",
            options: [
                {
                    name: "Option 1",
                    price: "$200",
                    details: ["10 Photos", "1 Hour Shoot Time", "1 Outfit"]
                },
                {
                    name: "Option 2",
                    price: "$300",
                    details: ["Unlimited Photos", "2 Hour Shoot Time", "2+ Outfits"]
                }
            ]
        }
    ];
    

    return (
        <RatesContainer>
            <CollectionTitle>Portrait Collections</CollectionTitle>
            <CollectionGrid>
                {portraitCollections.map((collection, index) => (
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

export default PortraitRates;
