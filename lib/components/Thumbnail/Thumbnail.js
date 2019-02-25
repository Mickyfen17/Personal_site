import React, { useState } from 'react';
import LoadingComponent from '../LoadingComponent';

const AsyncImage = LoadingComponent(() =>
  import(/* webpackChunkName: "cloudinaryImage" */ 'cloudinary-react/lib/components/Image')
);

const Thumbnail = ({ classNames, imageId, height, alt }) => {
  const [loaded, toggleLoaded] = useState(false);

  return (
    <article style={{ height }}>
      <AsyncImage
        cloudName="mickyfen17"
        className={loaded ? `${classNames} loaded` : `${classNames}`}
        publicId={imageId}
        quality={loaded ? 100 : 1}
        responsive
        dpr="auto"
        fetchFormat="auto"
        width="auto"
        height={height}
        crop="scale"
        alt={alt}
        onLoad={() => toggleLoaded(true)}
      />
    </article>
  );
};

export default Thumbnail;
