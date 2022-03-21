import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

import CardSearchItem from "../Card/CardSearchItem";

function MainHeader(props) {
  const [inputValue, setInputValue] = useState("");
  const [listSearchItem, setListSearchItem] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  //const { title, media } = props.items.results;

  const onSearchItemHandler = (e) => {
    setInputValue(e.target.value);
    setIsSearching(true);
  };

  let suggestionContainerClassName = isSearching
    ? `${styles["suggestion-container"]} ${styles.active}`
    : `${styles["suggestion-container"]} `;

  useEffect(() => {
    let timeOut;
    setListSearchItem([]);
    if (!props.isLoading) {
      timeOut = setTimeout(() => {
        let filterItem = [];
        if (inputValue.trim().length > 3) {
          filterItem = props.items.results.filter(
            (item) =>
              item.title.toUpperCase().includes(inputValue.toUpperCase()) &&
              inputValue.trim() !== ""
          );
        }
        if (inputValue.trim() === "") {
          setIsSearching(false);
        }
        setListSearchItem([]);
        setListSearchItem(filterItem);
      }, 500);
    }

    return () => {
      clearTimeout(timeOut);
    };
  }, [inputValue, props.items.results, props.isLoading]);

  return (
    <div className={styles.mainHeader}>
      <NavLink to="/" className={styles.navLink}>
        <h1>Ecommerce App</h1>
      </NavLink>
      <div className={styles["search-container"]}>
        <TextField
          id="outlined-basic"
          label="Tìm kiếm"
          variant="outlined"
          color="secondary"
          onChange={onSearchItemHandler}
          className={styles.searchInputField}
        />
        <div className={suggestionContainerClassName}>
          {listSearchItem.map((item, index) => (
            <CardSearchItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
