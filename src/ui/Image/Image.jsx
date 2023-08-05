import { useState } from 'react';

function Image({ src, alt, defaultImage, ...props }) {
  const [imageError, setImageError] = useState(false);

  return (
    <img
      src={imageError || !src ? defaultImage : src}
      alt={alt}
      onError={() => setImageError(true)}
      {...props}
    />
  );
}

export default Image;
