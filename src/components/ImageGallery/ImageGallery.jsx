import React, { Component } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { CustomLoader } from "components/Loader/Loader.jsx";
import { Modal } from "components/Modal/Modal";
import { Button } from "components/Button/Button";
import css from "./ImageGallery.module.css"

export class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    modalOpen: false,
    selectedImage: null,
    page: 1, 
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name || prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?key=43324490-9271efc526d8e6f2666c059a2&q=${this.props.name}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          images: prevState.page === 1 ? data.hits : [...prevState.images, ...data.hits],
        }));
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleModalOpen = (largeImageURL) => {
    this.setState({ selectedImage: largeImageURL, modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false, selectedImage: null });
  };

  loadMoreImages = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, modalOpen, selectedImage } = this.state;
    return (
      <div>
        <ul className={css.imagegallery}>
          {images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
              onClick={() => this.handleModalOpen(image.largeImageURL)}
            />
          ))}
        </ul>
        {loading && <CustomLoader />}
        {!loading && images.length > 0 && (
          <Button onClick={this.loadMoreImages}>Load More</Button>
        )}
        {modalOpen && (
          <Modal largeImageURL={selectedImage} onClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}
