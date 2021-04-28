import React, { useState, useEffect } from "react";

import {
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Paper,
  makeStyles,
  ListItemSecondaryAction,
} from "@material-ui/core";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import PlusOneIcon from "@material-ui/icons/PlusOne";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
  const [searchKey, setSearchKey] = useState("");
  const [searchList, setSearchList] = useState([]);

  // fecth all food items
  useEffect(() => {
    const allFood = AppService.fecthAllFood();

    setFoodItems(allFood);
  }, []);

  // search
  useEffect(() => {
    let tempFoodItems = [...foodItems];

    tempFoodItems = tempFoodItems.filter((item) => {
      return item.foodItemName.toLowerCase().includes(searchKey.toLowerCase());
    });

    setSearchList(tempFoodItems);
  }, [searchKey]);

  return (
    <>
      <Paper className={classes.searchPaper}>
        <InputBase
          placeholder='Search food items'
          className={classes.searchInput}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <IconButton>
          <SearchTwoToneIcon />
        </IconButton>
      </Paper>
      <List>
        {searchList.map((item) => (
          <ListItem key={item.foodItemId}>
            <ListItemText
              primary={item.foodItemName}
              secondary={`$${item.price}`}
            />
            <ListItemSecondaryAction>
              <IconButton>
                <PlusOneIcon />
                <ArrowForwardIosIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SearchFoodItems;
