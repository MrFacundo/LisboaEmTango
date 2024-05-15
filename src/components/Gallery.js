import { useState, useEffect } from 'react';
import tw from 'twin.macro';
import GalleryImage from './GalleryImage';

const Gallery = tw.div`
  relative
  flex
  justify-center
`;

const GalleryComponent = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <Gallery>
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          image={image}
          isVisible={index === currentImageIndex}
        />
      ))}
    </Gallery>
  );
};

export default GalleryComponent;