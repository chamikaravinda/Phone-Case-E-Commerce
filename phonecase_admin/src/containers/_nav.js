export default [
  {
    _tag: "CSidebarNavDropdown",
    name: "Products",
    route: "/product",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "All Prodcts",
        to: "/product/products",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add New Prouct",
        to: "/product/add-product",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Orders ",
    to: "/orders",
    icon: "cil-chart-pie",
  },
];