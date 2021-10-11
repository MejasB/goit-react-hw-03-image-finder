import React, { Component } from "react";
import { MyLoader } from "./components/loader/Loader";
import { getImagesWithDelay } from "./api";
import Button from "./components/button/Button";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Searchbar from "./components/searchbar/Searchbar";

const apiDelay = 100;

class App extends Component {
  state = {
    pageNum: 1,
    searchTerm: "",
    images: [],
    modalLargeURL: "",
    showLoader: false,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.pageNum !== this.state.pageNum) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
    if (prevState.searchTerm !== this.state.searchTerm) {
      getImagesWithDelay(this.state.searchTerm, 1, apiDelay).then((images) =>
        this.setState(
          {
            images: images,
            pageNum: 1,
          },
          this.hideLoader()
        )
      );
    }
  };

  onSearchSubmit = (searchTerm) => {
    this.setState({ searchTerm: searchTerm });
    this.showLoader();
  };

  onBtnClick = () => {
    this.showLoader();
    getImagesWithDelay(
      this.state.searchTerm,
      this.state.pageNum + 1,
      apiDelay
    ).then((newImages) =>
      this.setState((prevState) => ({
        images: [...prevState.images, ...newImages],
        pageNum: prevState.pageNum + 1,
      }))
    );
  };

  showLoader = () => {
    this.setState((prevState) =>
      prevState.showLoader ? null : { showLoader: true }
    );
  };

  hideLoader = () => {
    this.setState((prevState) =>
      prevState.showLoader ? { showLoader: false } : null
    );
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSearchSubmit}></Searchbar>
        {this.state.images.length > 0 && (
          <ImageGallery
            images={this.state.images}
            onItemClick={this.onItemClick}
          ></ImageGallery>
        )}
        {this.state.images.length > 0 && (
          <Button onClick={this.onBtnClick}></Button>
        )}
        {this.state.showLoader && <MyLoader></MyLoader>}
      </>
    );
  }
}

export default App;
