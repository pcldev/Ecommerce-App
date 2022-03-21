import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import React from "react";
import CardItem from "./CardItem";
import styles from "./ListCardItem.module.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2.5),
  borderRadius: "30px",
}));

function ListCardItem(props) {
  return (
    <div className={styles.listCardItem}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} columns={12}>
          {props.items.results.map((item) => (
            <Grid item xl={3} key={item.id}>
              <Item>
                <CardItem item={item} />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default React.memo(ListCardItem);
