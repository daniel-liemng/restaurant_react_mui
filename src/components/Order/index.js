import { Grid } from "@material-ui/core";
import React from "react";

import useForm from "../../hooks/useForm";
import OrderedFoodItems from "./OrderedFoodItems";
import OrderForm from "./OrderForm";
import SearchFoodItems from "./SearchFoodItems";

const generateOrderNumber = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const getFreshModelObject = () => ({
  orderMasterId: 0,
  orderNumber: generateOrderNumber(),
  customerId: 0,
  pMethod: "none",
  gTotal: 0,
  deletedOrderItemIds: "",
  orderDetails: [],
});

const Order = () => {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls,
  } = useForm(getFreshModelObject);

  // Add food item to Order
  const addFoodItem = (foodItem) => {
    let tempOrderDetails = {
      orderMasterId: values.orderMasterId,
      orderDetailId: 0,
      foodItemId: foodItem.foodItemId,
      quantity: 1,
      foodItemPrice: foodItem.foodItemPrice,
      foodItemName: foodItem.foodItemName,
    };

    setValues({
      ...values,
      orderDetails: [...values.orderDetails, tempOrderDetails],
    });
  };

  console.log("BBB", values);

  return (
    <>
      <OrderForm {...{ values, errors, handleInputChange }} />
      <Grid container>
        <Grid item xs={6}>
          <SearchFoodItems {...{ addFoodItem }} />
        </Grid>
        <Grid item xs={6}>
          <OrderedFoodItems />
        </Grid>
      </Grid>
    </>
  );
};

export default Order;
