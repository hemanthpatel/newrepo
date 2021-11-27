import React from "react";
import { Box } from "@chakra-ui/react";
import { Suspense } from "react";

const PrivateRoute = (props) => {
  const { children, component: Component, location, ...rest } = props;
  return (
    <Suspense
      fallback={
        <Box as="h1" m="auto">
          ...Loading
        </Box>
      }
    >
      <Component {...rest} />
    </Suspense>
  );
};

export default PrivateRoute;
