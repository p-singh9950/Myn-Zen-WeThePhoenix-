// src/components/FashionChallenges.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const FashionChallenges = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        const fetchChallenges = async () => {
            const challengesCollection = collection(db, 'fashionChallenges');
            const challengesSnapshot = await getDocs(challengesCollection);
            const challengesList = challengesSnapshot.docs.map(doc => doc.data());
            setChallenges(challengesList);
        };

        fetchChallenges();
    }, []);

    return (
        <div>
            <h2>Fashion Challenges</h2>
            {challenges.map((challenge, index) => (
                <div key={index}>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FashionChallenges;
