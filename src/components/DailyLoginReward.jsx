// src/components/DailyLoginReward.js
import React, { useState, useEffect } from 'react';

const DailyLoginReward = () => {
    const [coins, setCoins] = useState(0);
    const [message, setMessage] = useState('');
    const [showMessage,setShowMessage] = useState(false);

    useEffect(() => {
        const today = new Date().toLocaleDateString();
        const lastLogin = localStorage.getItem('lastLogin');

        if (lastLogin !== today) {
            localStorage.setItem('lastLogin', today);
            setShowMessage(!showMessage);
            setCoins(500); 
            setMessage("You've earned 500 Super Coins! 🎉");
        } else {
            setMessage("You've already claimed your reward for today.");
        }
    }, []);

    return (
        showMessage ? 
        <>
            <div className="mt-6 p-6 w-screen h-full bg-white rounded-lg shadow-md">
                <div className='flex justify-between'>
                    <h2 className="text-2xl font-semibold text-gray-800">Daily Login Reward</h2>
                    <button 
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                    onClick={()=>{setShowMessage(!showMessage)}}>Close</button>
                </div>
                <p className="mt-2 text-lg text-gray-600">{message}</p>
                <p className="mt-4 text-lg text-blue-500 font-bold">Total Coins: {coins}</p>
            </div>
        </>:
        <>
        </>
    );
};

export default DailyLoginReward;
