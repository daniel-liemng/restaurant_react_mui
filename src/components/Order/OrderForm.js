import React, { useState, useEffect } from "react";

import {
  Button,
  ButtonGroup,
  Grid,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";

import Form from "../../layout/Form";
import { Controls } from "../../controls/Controls";

import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ReplayIcon from "@material-ui/icons/Replay";
import ReorderIcon from "@material-ui/icons/Reorder";

import * as AppService from "../../services/AppService";

// const customerList = [
//   { id: 0, title: "Select" },
//   { id: 1, title: "Customer 1" },
//   { id: 2, title: "Customer 2" },
//   { id: 3, title: "Customer 3" },
// ];

const paymentMethods = [
  { id: "none", title: "Select" },
  { id: "Cash", title: "Cash" },
  { id: "Card", title: "Card" },
];

const useStyles = makeStyles((theme) => ({
  adornmentText: {
    "& .MuiTypography-root": {
      color: "#f3b33d",
      fontWeight: "bolder",
      fontSize: "1.2rem",
    },
  },
  submitBtnGroup: {
    backgroundColor: "#f3b33d",
    color: "#000",
    margin: theme.spacing(1),
    "& .MuiButton-label": {
      textTransform: "none",
    },
    "&:hover": {
      backgroundColor: "#f3b33d",
    },
  },
}));

const OrderForm = (props) => {
  // const [values, setValues] = useState(getFreshModelObject());

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // };

  // const resetFormControls = () => {
  //   setValues(getFreshModelObject());
  // };

  const classes = useStyles();

  const { values, errors, handleInputChange } = props;

  const [customerList, setCustomerList] = useState([]);

  // Fecth all customers for <Select/>
  useEffect(() => {
    let cusList = AppService.fetchAllCustomer();

    // Format customerList
    cusList = cusList.map((item) => ({
      id: item.customerId,
      title: item.customerName,
    }));

    // Add one more record
    cusList = [{ id: 0, title: "Select" }].concat(cusList);

    setCustomerList(cusList);
  }, []);

  console.log("A", customerList);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            disabled
            label='Order Number'
            name='orderNumber'
            value={values.orderNumber}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position='start'
                  className={classes.adornmentText}
                >
                  #
                </InputAdornment>
              ),
            }}
          />
          <Controls.Select
            label='Customer'
            name='customerId'
            value={values.customerId}
            onChange={handleInputChange}
            options={customerList}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Select
            label='Payment Method'
            name='pMethod'
            value={values.pMethod}
            onChange={handleInputChange}
            options={paymentMethods}
          />
          <Controls.Input
            disabled
            label='Grand Total'
            name='gTotal'
            value={values.gTotal}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position='start'
                  className={classes.adornmentText}
                >
                  $
                </InputAdornment>
              ),
            }}
          />

          <ButtonGroup className={classes.submitBtnGroup}>
            <Button type='submit' endIcon={<RestaurantMenuIcon />} size='large'>
              Submit
            </Button>
            <Button startIcon={<ReplayIcon />} size='small' />
          </ButtonGroup>

          <Controls.Button size='large' startIcon={<ReorderIcon />}>
            Orders
          </Controls.Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default OrderForm;
