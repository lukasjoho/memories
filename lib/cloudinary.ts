import { Cloudinary } from '@cloudinary/url-gen';
import { fit } from '@cloudinary/url-gen/actions/resize';

export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
});

export const getCloudinaryImage = (url: string) => {
  const image = cld
    .image(url)
    .quality(60)
    .setDeliveryType('fetch')
    .format('auto')
    .addTransformation('dpr_2')
    .resize(fit());
  return image;
};
