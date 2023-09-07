import { ComponentPropsWithoutRef, useState } from 'react';

type ImageProps = ComponentPropsWithoutRef<'img'> & {
  defaultImage: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, defaultImage, ...rest }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <img
      src={imageError || !src ? defaultImage : src}
      alt={alt}
      onError={() => setImageError(true)}
      {...rest}
    />
  );
};

export default Image;
