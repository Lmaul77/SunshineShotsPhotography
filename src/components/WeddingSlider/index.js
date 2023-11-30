import React, { useState, useEffect } from 'react';
import ImageSlider from '../GallerySliders/imageSlider';

const Wedding = () => {
    const importAll = (r) => r.keys().map(r);

    const regularImages = importAll(require.context('../../images/WeddingPhotos', false, /\.(png|jpe?g|svg)$/));
    const largeImages = importAll(require.context('../../images/WeddingPhotosLarge', false, /\.(png|jpe?g|svg)$/));

    const [currentImages, setCurrentImages] = useState(regularImages);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 768) { // Example breakpoint for mobile
                setCurrentImages(regularImages);
            } else {
                setCurrentImages(largeImages);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on component mount

        return () => window.removeEventListener('resize', handleResize);
    }, [regularImages, largeImages]);

    return (
        <div>
            <ImageSlider images={currentImages} />
        </div>
    );
}

export default Wedding;
