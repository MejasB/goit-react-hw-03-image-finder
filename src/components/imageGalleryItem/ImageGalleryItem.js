import { ImageGalleryItemContainer } from "./ImageGalleryItemStyled";
import PropTypes from "prop-types";
import Modal from "../modal/Modal";
import { Component } from "react";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = (event) => {
    if (event?.target.nodeName && event?.target.nodeName === "IMG") return;
    this.setState({ showModal: false });
  };

  render() {
    const { id, imgURL, largeImageURL } = this.props;
    return (
      <>
        <ImageGalleryItemContainer>
          <img
            src={imgURL}
            // data-large-image-url={largeImageURL}
            key={id}
            alt="#"
            onClick={this.openModal}
            className="ImageGalleryItem-image"
          />
        </ImageGalleryItemContainer>
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            closeModal={this.closeModal}
          ></Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  imgURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
