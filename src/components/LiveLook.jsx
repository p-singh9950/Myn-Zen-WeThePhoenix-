// src/components/LiveLook.js
import React, { useState } from 'react';

const LiveLook = () => {
    const [selectedTop, setSelectedTop] = useState('');
    const [selectedBottom, setSelectedBottom] = useState('');

    const tops = ['Crop Top 1', 'Crop Top 2', 'Crop Top 3', 'Crop Top 4'];
    const bottoms = ['Denim 1', 'Denim 2', 'Denim 3', 'Denim 4'];

    return (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Live Look</h2>
            <div className="flex space-x-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold">Select a Top</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {tops.map((top, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedTop(top)}
                                className={`border rounded p-2 ${selectedTop === top ? 'bg-blue-200' : ''}`}
                            >
                                {top}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold">Select a Bottom</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {bottoms.map((bottom, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedBottom(bottom)}
                                className={`border rounded p-2 ${selectedBottom === bottom ? 'bg-blue-200' : ''}`}
                            >
                                {bottom}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-xl font-bold">Selected Outfit:</h3>
                <p className="text-gray-600">Top: {selectedTop}</p>
                <p className="text-gray-600">Bottom: {selectedBottom}</p>
            </div>
        </div>
    );
};

export default LiveLook;
