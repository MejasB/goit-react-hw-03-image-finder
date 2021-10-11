import PropTypes from "prop-types";

import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import { ImageGalleryContainer } from "./ImageGalleryStyled";

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryContainer>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          id={image.id}
          imgURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ImageGalleryContainer>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageGallery;
