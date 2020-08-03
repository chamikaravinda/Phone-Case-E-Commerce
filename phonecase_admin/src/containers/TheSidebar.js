import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CRow,
} from "@coreui/react";

import logo from "../assets/images/logo.jpg";
// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.initialState.sidebarShow);

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
      color="white"
      className="c-sidebar-light"
    >
      <CSidebarBrand
        className="d-md-down-none"
        to="/"
        style={{ backgroundColor: "white" }}
      >
        <div className="c-sidebar-brand-full" name="logo-negative" height={35}>
          <CRow>
            <img src={logo} alt="The Case Co." />
            <h5 style={{ paddingTop: "10px", color: "black" }}>The Case Co.</h5>
          </CRow>
        </div>
        <div className="c-sidebar-brand-minimized" name="sygnet" height={35}>
          <img src={logo} alt="The Case Co.	" />
        </div>
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
          className="text-dark warning"
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
