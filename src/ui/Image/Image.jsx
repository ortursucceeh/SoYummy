import { useState } from 'react';

function Image({ imageUrl, alt, defaultImage, ...props }) {
  const [imageError, setImageError] = useState(false);

  return (
    <img
      src={imageError || !imageUrl ? defaultImage : imageUrl}
      alt={alt}
      onError={() => setImageError(true)}
      {...props}
    />
  );
}

export default Image;
