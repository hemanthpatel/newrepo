/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Layout } from "../layout";

const PublicRoute = (props) => {
  const { children, component: Component, location, ...rest } = props;
  return (
    <Layout isUserNav>
      <Component {...rest} />
    </Layout>
  );
};
export default PublicRoute;
