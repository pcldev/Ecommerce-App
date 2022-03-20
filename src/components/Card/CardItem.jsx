import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./CardItem.module.css";

function CardItem(props) {
  const { imageUrl, name, type, price, id } = props.item;
  const history = useHistory();
  const onClickHandler = () => {
    history.push(`/items/${id}`);
  };
  return (
    <div className={styles.cardItem}>
      <img src={imageUrl} alt={`${name} img`} />
      <div className={styles.content}>
        <p>{type}</p>
        <h2>{name}</h2>
      </div>

      <div className={styles["bottom-card"]}>
        <p>${price}</p>
        <Button
          variant="contained"
          color="secondary"
          size="big"
          onClick={onClickHandler}
        >
          Detail &gt;
        </Button>
      </div>
    </div>
  );
}

export default CardItem;
