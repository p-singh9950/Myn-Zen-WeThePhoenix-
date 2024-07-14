// src/components/MixAndMatch.js
import React, { useState } from 'react';

const MixAndMatch = () => {
    const [selectedItems, setSelectedItems] = useState({
        tops: '',
        bottoms: '',
        shoes: '',
        accessories: '',
    });

    const handleRandomSelection = (type) => {
        const items = {
            tops: ['Top 1', 'Top 2', 'Top 3', 'Top 4'],
            bottoms: ['Bottom 1', 'Bottom 2', 'Bottom 3', 'Bottom 4'],
            shoes: ['Shoe 1', 'Shoe 2', 'Shoe 3', 'Shoe 4'],
            accessories: ['Accessory 1', 'Accessory 2', 'Accessory 3', 'Accessory 4'],
        };
        const randomItem = items[type][Math.floor(Math.random() * items[type].length)];
        setSelectedItems((prev) => ({ ...prev, [type]: randomItem }));
    };

    return (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Mix and Match</h2>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <div>
                    <h3 className="text-lg">Tops</h3>
                    <button onClick={() => handleRandomSelection('tops')} className="bg-blue-500 text-white rounded p-2">
                        Select Random Top
                    </button>
                    <p className="mt-2 text-gray-600">Selected: {selectedItems.tops}</p>
                </div>
                <div>
                    <h3 className="text-lg">Bottoms</h3>
                    <button onClick={() => handleRandomSelection('bottoms')} className="bg-blue-500 text-white rounded p-2">
                        Select Random Bottom
                    </button>
                    <p className="mt-2 text-gray-600">Selected: {selectedItems.bottoms}</p>
                </div>
                <div>
                    <h3 className="text-lg">Shoes</h3>
                    <button onClick={() => handleRandomSelection('shoes')} className="bg-blue-500 text-white rounded p-2">
                        Select Random Shoe
                    </button>
                    <p className="mt-2 text-gray-600">Selected: {selectedItems.shoes}</p>
                </div>
                <div>
                    <h3 className="text-lg">Accessories</h3>
                    <button onClick={() => handleRandomSelection('accessories')} className="bg-blue-500 text-white rounded p-2">
                        Select Random Accessory
                    </button>
                    <p className="mt-2 text-gray-600">Selected: {selectedItems.accessories}</p>
                </div>
            </div>
        </div>
    );
};

export default MixAndMatch;
