/* eslint-disable react/jsx-props-no-spreading */
import { Box } from "@chakra-ui/react";
import React from "react";
import { Suspense } from "react";
import { Layout } from "../layout";

const PublicRoute = (props) => {
  const { children, component: Component, location, ...rest } = props;
  return (
    <Layout isUserNav>
      <Suspense
        fallback={
          <Box as="h1" m="auto">
            ...Loading
          </Box>
        }
      >
        <Component {...rest} />
      </Suspense>
    </Layout>
  );
};
export default PublicRoute;
