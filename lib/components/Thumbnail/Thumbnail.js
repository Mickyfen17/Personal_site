import React, { Component } from 'react';
import LoadingComponent from '../LoadingComponent';

const AsyncImage = LoadingComponent(() =>
  import(/* webpackChunkName: "cloudinaryImage" */ 'cloudinary-react/lib/components/Image')
);

class Thumbnail extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }
  render() {
    const { loaded } = this.state;
    const { classNames, imageId, height, alt } = this.props;
    return (
      <AsyncImage
        cloudName="mickyfen17"
        className={loaded ? `${classNames} loaded` : `${classNames}`}
        publicId={imageId}
        quality={100}
        responsive
        dpr="auto"
        fetchFormat="auto"
        width="auto"
        height={height}
        crop="scale"
        alt={alt}
        onLoad={() => this.setState({ loaded: true })}
      />
    );
  }
}

export default Thumbnail;
