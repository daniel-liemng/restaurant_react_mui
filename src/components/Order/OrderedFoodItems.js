import React, { Fragment } from "react";

import {
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  makeStyles,
} from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import { roundTo2Decimal } from "../../utils";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    margin: "15px 0px",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover $deleteButton": {
      display: "block",
    },
  },
  buttonGroup: {
    backgroundColor: "#e3e3e3",
    borderRadius: 8,
    "& .MuiButtonBase-root": {
      border: "none",
      minWidth: "25px",
      padding: "1px",
    },
    "& button:nth-child(2)": {
      fontSize: "1.2em",
      color: "#000",
    },
  },
  deleteButton: {
    display: "none",
    "& .MuiButtonBase-root": {
      color: "#e81719",
    },
  },
  totalPerItem: {
    fontWeight: "bolder",
    fontSize: "1.2em",
    margin: "0px 10px",
  },
}));

const OrderedFoodItems = (props) => {
  const classes = useStyles();

  const { values, setValues } = props;

  let orderedFoodItems = values.orderDetails;

  const updateQuantity = (index, value) => {
    let temp = { ...values };

    let foodItem = temp.orderDetails[index];

    if (foodItem.quantity + value > 0) {
      foodItem.quantity += value;
      setValues({ ...temp });
    }
  };

  // Delete food item from Order Details
  const removeFoodItem = (index, id) => {
    let x = { ...values };

    x.orderDetails = x.orderDetails.filter((_, i) => i !== index);

    setValues({ ...x });
  };

  return (
    <List>
      {orderedFoodItems.map((item, index) => (
        <Paper key={index} className={classes.paperRoot}>
          <ListItem>
            <ListItemText
              primary={item.foodItemName}
              primaryTypographyProps={{
                component: "h1",
                style: {
                  fontWeight: "500",
                  fontSize: "1.2rem",
                },
              }}
              secondary={
                <>
                  <ButtonGroup size='small' className={classes.buttonGroup}>
                    <Button onClick={() => updateQuantity(index, -1)}>-</Button>
                    <Button disabled>{item.quantity}</Button>
                    <Button onClick={() => updateQuantity(index, 1)}>+</Button>
                  </ButtonGroup>
                  <span className={classes.totalPerItem}>{`$${roundTo2Decimal(
                    item.quantity * item.foodItemPrice
                  )}`}</span>
                </>
              }
              secondaryTypographyProps={{
                component: "div",
              }}
            />

            <ListItemSecondaryAction className={classes.deleteButton}>
              <IconButton
                disableRipple
                onClick={() => removeFoodItem(index, item.orderDetailsId)}
              >
                <DeleteTwoToneIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Paper>
      ))}
    </List>
  );
};

export default OrderedFoodItems;
