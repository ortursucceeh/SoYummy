import { ComponentProps, useState } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  defaultImage: string;
  onClick?: () => void;
  props?: Omit<ComponentProps<'img'>, 'src' | 'alt'> & { src: string; alt: string };
}

const Image: React.FC<ImageProps> = ({ src, alt, defaultImage, ...props }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <img
      src={imageError || !src ? defaultImage : src}
      alt={alt}
      onError={() => setImageError(true)}
      {...props}
    />
  );
};

export default Image;
