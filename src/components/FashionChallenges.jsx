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
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Fashion Challenges</h2>
            {challenges.map((challenge, index) => (
                <div key={index} className="mt-4 border-b pb-4">
                    <h3 className="text-xl font-bold text-gray-700">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FashionChallenges;
