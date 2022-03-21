import React, { useCallback, useRef, useState } from "react";

import styles from "./ItemDetails.module.css";
import "./ItemDetails.css";
import { Button } from "@mui/material";
import Slider from "../Slider/Slider";

function ItemDetails(props) {
  const { type, name, description, colour, images, price, tags, id } =
    props.items;
  const [quantity, setQuantity] = useState(1);
  const [priceVal, setPrice] = useState(price);

  const onDecrementHandler = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(() => quantity - 1);
      setPrice(() => priceVal - price);
    }
  };
  const onIncrementHandler = () => {
    if (quantity === 7) {
      return;
    } else {
      setQuantity(() => quantity + 1);
      setPrice(() => priceVal + price);
    }
  };

  return (
    <div className="itemDetails">
      <Slider images={images} />
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
        <b>Size:</b>
        <div className="size">
          <span>X</span>
          <span>L</span>
          <span>XL</span>
          <span>S</span>
        </div>

        <b>Colour:</b>
        <p>{colour}</p>
        <p className="price">${priceVal}</p>
        <div className="button-container">
          <button onClick={onDecrementHandler}>-</button>
          <div className="number">{quantity}</div>
          <button onClick={onIncrementHandler}>+</button>
        </div>
        <Button
          className="btn-addToCart"
          variant="contained"
          color="secondary"
          size="big"
        >
          Add To Cart
        </Button>
        <p>{type}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
