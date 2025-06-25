import { useState, useEffect } from 'react';

export const usePost = (imageSrc: string) => {
    const [imageExists, setImageExists] = useState<boolean>(false);

    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => setImageExists(true);
        img.onerror = () => setImageExists(false);
    }, [imageSrc]);

    return { imageExists }; 
}