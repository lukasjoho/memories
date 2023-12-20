'use client';
import { getCloudinaryImage } from '@/lib/cloudinary';
import { AdvancedImage, responsive } from '@cloudinary/react';
import { FC } from 'react';

interface OptimizedImageProps {
  src: string;
  steps?: number[];
  objectFit?: 'cover' | 'contain';
  style?: React.CSSProperties;
}

const OptimizedImage: FC<OptimizedImageProps> = ({
  src,
  steps,
  objectFit = 'cover',
  style,
}) => {
  return (
    <AdvancedImage
      style={{
        height: '100%',
        width: '100%',
        ...style,
      }}
      cldImg={getCloudinaryImage(src)}
      plugins={[responsive({ steps })]}
    />
  );
};

export default OptimizedImage;
