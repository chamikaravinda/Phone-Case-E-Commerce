import React from "react";

/* Import Product Pages */
const Products = React.lazy(() => import("./views/product/Products"));
const AddProduct = React.lazy(() => import("./views/product/AddProduct"));
/*--------------------*/

/* Import Order Pages */
const Orders = React.lazy(() => import("./views/orders/Orders"));
/*-------------------*/

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  /* Product Routes*/
  { path: "/product", name: "Product", component: Products, exact: true },
  {
    path: "/product/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/add-product",
    name: "Add Product",
    component: AddProduct,
  },
  /*--------------*/

  /* Order Routes*/
  { path: "/orders", name: "Orders", component: Orders, exact: true },
  /*--------------*/

  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
];

export default routes;