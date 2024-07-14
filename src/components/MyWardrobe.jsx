// src/components/MyWardrobe.js
import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase/firebaseConfig';

const MyWardrobe = () => {
    const [wardrobe, setWardrobe] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('wardrobe').onSnapshot(snapshot => {
            const items = snapshot.docs.map(doc => doc.data());
            setWardrobe(items);
        });
        return () => unsubscribe(); 
    }, []);

    const handleUpload = async (file) => {
        const user = auth.currentUser;
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`wardrobe/${file.name}`);
        await fileRef.put(file);
        const fileUrl = await fileRef.getDownloadURL();
    
        await db.collection('wardrobe').add({
            userId: user.uid,
            imageUrl: fileUrl,
            createdAt: new Date(),
        });
    };


    return (
        <div>
            <h1>My Wardrobe</h1>
            {wardrobe.map(item => (
                <img key={item.id} src={item.imageUrl} alt="Wardrobe Item" />
            ))}
        </div>
    );
};

export default MyWardrobe;
