import React, { Component } from "react";
import css from "./modal.module.css";


export class Modal extends Component {
  

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;

    return (
      <div className={css.overlay} onClick={this.handleOverlayClick}>
        <div className={css.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
