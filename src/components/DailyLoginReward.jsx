// src/components/DailyLoginReward.js
import React, { useState, useEffect } from 'react';

const DailyLoginReward = () => {
    const [coins, setCoins] = useState(0);

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            const userRef = db.collection('users').doc(user.uid);
            userRef.get().then(doc => {
                if (doc.exists) {
                    const lastLogin = doc.data().lastLogin.toDate();
                    const today = new Date();
                    if (today - lastLogin > 86400000) { 
                        userRef.update({
                            lastLogin: new Date(),
                            superCoins: doc.data().superCoins + 500
                        });
                        setReward(500);
                    }
                }
            });
        }
    }, []);

    return (
        <div>
            <h2>Daily Login Reward</h2>
            <p>You have earned: {coins} Super Coins!</p>
        </div>
    );
};

export default DailyLoginReward;
