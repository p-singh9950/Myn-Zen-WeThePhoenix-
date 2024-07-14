// src/components/MyWardrobe.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const MyWardrobe = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const itemsCollection = collection(db, 'wardrobe');
            const itemsSnapshot = await getDocs(itemsCollection);
            const itemsList = itemsSnapshot.docs.map(doc => doc.data());
            setItems(itemsList);
        };

        fetchItems();
    }, []);

    const addItem = async () => {
        if (newItem.trim()) {
            await addDoc(collection(db, 'wardrobe'), { name: newItem });
            setNewItem('');
            const updatedItems = [...items, { name: newItem }];
            setItems(updatedItems);
        }
    };

    return (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">My Wardrobe</h2>
            <div className="mt-4 flex">
                <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Add a new item"
                />
                <button
                    onClick={addItem}
                    className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Add Item
                </button>
            </div>
            <ul className="mt-4">
                {items.map((item, index) => (
                    <li key={index} className="text-gray-700 py-1">
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyWardrobe;
