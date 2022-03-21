import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./CardSearchItem.module.css";
function CardSearchItem(props) {
  const { id, media, title, brand } = props.item;

  const imageUrl =
    media.imageUrl !== null ? media.imageUrl : require("../../alternative.jpg");

  return (
    <>
      <NavLink className={styles.searchItem} to={`/items/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className={styles.content}>
          <p>{title}</p>
          <p>{brand}</p>
        </div>
      </NavLink>
    </>
  );
}

export default CardSearchItem;
