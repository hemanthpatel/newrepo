import React from "react";

const PrivateRoute = (props) => {
  const { children, component: Component, location, ...rest } = props;
  return <Component {...rest} />;
};

export default PrivateRoute;
