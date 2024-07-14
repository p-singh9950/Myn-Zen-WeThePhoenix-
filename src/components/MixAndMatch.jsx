// src/components/MixAndMatch.js
import React, { useState } from 'react';

const MixAndMatch = () => {
    const [selectedItems, setSelectedItems] = useState({
        top: '',
        bottom: '',
        shoes: '',
        accessories: ''
    });

    const randomizeItems = () => {
        const items = {
            tops: ['Top 1', 'Top 2', 'Top 3', 'Top 4'],
            bottoms: ['Bottom 1', 'Bottom 2', 'Bottom 3', 'Bottom 4'],
            shoes: ['Shoe 1', 'Shoe 2', 'Shoe 3', 'Shoe 4'],
            accessories: ['Accessory 1', 'Accessory 2', 'Accessory 3', 'Accessory 4']
        };

        setSelectedItems({
            top: items.tops[Math.floor(Math.random() * items.tops.length)],
            bottom: items.bottoms[Math.floor(Math.random() * items.bottoms.length)],
            shoes: items.shoes[Math.floor(Math.random() * items.shoes.length)],
            accessories: items.accessories[Math.floor(Math.random() * items.accessories.length)]
        });
    };

    return (
        <div>
            <h2>Mix and Match</h2>
            <button onClick={randomizeItems}>Randomize Outfit</button>
            <div>
                <h3>Your Outfit</h3>
                <p>Top: {selectedItems.top}</p>
                <p>Bottom: {selectedItems.bottom}</p>
                <p>Shoes: {selectedItems.shoes}</p>
                <p>Accessory: {selectedItems.accessories}</p>
            </div>
        </div>
    );
};

export default MixAndMatch;
