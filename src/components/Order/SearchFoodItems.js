import React, { useState, useEffect } from "react";

import {
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  makeStyles,
} from "@material-ui/core";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";

import * as AppService from "../../services/AppService";

const useStyles = makeStyles((theme) => ({
  searchPaper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  searchInput: {
    marginLeft: theme.spacing(1.5),
    flex: 1,
  },
}));

const SearchFoodItems = () => {
  const classes = useStyles();

  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const allFood = AppService.fecthAllFood();

    setFoodItems(allFood);
  }, []);

  return (
    <>
      <Paper className={classes.searchPaper}>
        <InputBase
          placeholder='Search food items'
          className={classes.searchInput}
        />
        <IconButton>
          <SearchTwoToneIcon />
        </IconButton>
      </Paper>
      <List>
        {foodItems.map((item) => (
          <ListItem key={item.foodItemId}>
            <ListItemText
              primary={item.foodItemName}
              secondary={`$${item.price}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SearchFoodItems;
