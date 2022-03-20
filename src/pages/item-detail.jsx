import React from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../components/ItemDetails/ItemDetails";

function ItemDetail(props) {
  const param = useParams();
  const { itemId } = param;
  const items = props.items.filter((item) => item.id === +itemId);
  return (
    <div>
      <ItemDetails items={items[0]} />
    </div>
  );
}

export default ItemDetail;
