import React from "react";
import { Outlet, useOutlet } from "react-router-dom";

const Layout = () => {
  const getLayout =
    useOutlet().props.children.props.routeContext.matches[1].route.element.type
      .getLayout;

  return getLayout(<Outlet />);
};

export default Layout;
