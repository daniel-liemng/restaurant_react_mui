const customerList = [
  { customerId: 1, customerName: "Jennifer Acosta" },
  { customerId: 2, customerName: "Daniel Hecker" },
  { customerId: 3, customerName: "Kate Smith" },
  { customerId: 4, customerName: "Ava Elliot" },
];

const foodList = [
  { foodItemId: 1, foodItemName: "Chicken Tenders", price: 3.5 },
  { foodItemId: 2, foodItemName: "Beef Noodles", price: 4.99 },
  { foodItemId: 3, foodItemName: "Grilled Cheese Sandwich", price: 5.99 },
  { foodItemId: 4, foodItemName: "Steak Burger", price: 2.5 },
  { foodItemId: 5, foodItemName: "Smash Potatoes", price: 3.99 },
  { foodItemId: 6, foodItemName: "Pork Soup", price: 2.99 },
];

export const fetchAllCustomer = () => {
  return customerList;
};

export const fecthAllFood = () => {
  return foodList;
};
