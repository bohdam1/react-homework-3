import React from "react";
import css from "./ImageGalleryItem.module.css"

export const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <li onClick={onClick} className={ImageGalleryItem}>
      <img src={webformatURL} alt={tags} className={css.ImageGalleryItem__image} />
    </li>
  );
};
