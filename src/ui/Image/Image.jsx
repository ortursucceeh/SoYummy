import { useState } from 'react';

function Image({ imageUrl, alt, defaultImage, ...props }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <img
      src={imageError ? defaultImage : imageUrl}
      alt={alt}
      onError={handleImageError}
      {...props}
    />
  );
}

export default Image;
