import React from 'react';
import { Image } from 'cloudinary-react';

const Thumbnail = ({ classNames, imageId, width, height, alt }) => {
  return (
    <Image
      cloudName="mickyfen17"
      className={classNames}
      publicId={imageId}
      quality={100}
      width={width}
      height={height}
      crop="scale"
      alt={alt}
    />
  );
};

export default Thumbnail;
