// src/components/LiveLook.js
import React, { useState } from 'react';

const LiveLook = () => {
    const [selectedTop, setSelectedTop] = useState('');
    const [selectedBottom, setSelectedBottom] = useState('');

    const tops = ['Top 1', 'Top 2', 'Top 3', 'Top 4'];
    const bottoms = ['Bottom 1', 'Bottom 2', 'Bottom 3', 'Bottom 4'];

    return (
        <div>
            <h2>Live Look</h2>
            <div>
                <h3>Select a Top</h3>
                {tops.map((top, index) => (
                    <button key={index} onClick={() => setSelectedTop(top)}>
                        {top}
                    </button>
                ))}
            </div>
            <div>
                <h3>Select a Bottom</h3>
                {bottoms.map((bottom, index) => (
                    <button key={index} onClick={() => setSelectedBottom(bottom)}>
                        {bottom}
                    </button>
                ))}
            </div>
            <div>
                <h3>Your Avatar</h3>
                <p>Top: {selectedTop}</p>
                <p>Bottom: {selectedBottom}</p>
            </div>
        </div>
    );
};

export default LiveLook;
