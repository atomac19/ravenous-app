import React from 'react';
import Business from './Business';

const businessObjectsList = [
    {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }
]

function BusinessList() {
    return (
        <>
            <Business 
                        imageSrc={businessObjectsList[0].imageSrc}
                        name={businessObjectsList[0].name}
                        address={businessObjectsList[0].address}
                        city={businessObjectsList[0].city}
                        state={businessObjectsList[0].state}
                        zipCode={businessObjectsList[0].zipCode}
                        category={businessObjectsList[0].category}
                        rating={businessObjectsList[0].rating}
                        reviewCount={businessObjectsList[0].reviewCount}
                        
                        
                        />
        </>
    );
}


export default BusinessList;
