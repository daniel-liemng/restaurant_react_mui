import React, { Fragment } from "react";

import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";

const OrderedFoodItems = (props) => {
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
        <Paper key={index}>
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
                  <ButtonGroup size='small'>
                    <Button onClick={() => updateQuantity(index, -1)}>-</Button>
                    <Button disabled>{item.quantity}</Button>
                    <Button onClick={() => updateQuantity(index, 1)}>+</Button>
                  </ButtonGroup>
                </>
              }
              secondaryTypographyProps={{
                component: "div",
              }}
            />

            <ListItemSecondaryAction>
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
