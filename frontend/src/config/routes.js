import { Router } from "@reach/router";
import React, { lazy, Suspense } from "react";
import PrivateRoute from "../components/private-route";
import PublicRoute from "../components/public-route";

const Main = lazy(() => import("../layouts/main"));
const Merchant = lazy(() => import("../layouts/merchant"));
const Marketing = lazy(() => import("../layouts/marketing"));
const Producer = lazy(() => import("../layouts/producer"));
const Success = lazy(() => import("../layouts/success"));

export const ROUTE_NAMES = {
  MAIN: "/",
  MERCHANT: "/merchant",
  PRODUCER: "/producer",
  MARKETING: "/marketing",
  SUCCESS: "/success",
};

const Routes = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Router>
          <PrivateRoute path={ROUTE_NAMES.MAIN} component={Main} />
          <PrivateRoute path={ROUTE_NAMES.SUCCESS} component={Success} />
          <PublicRoute path={ROUTE_NAMES.MERCHANT} component={Merchant} />
          <PublicRoute path={ROUTE_NAMES.PRODUCER} component={Producer} />
          <PublicRoute path={ROUTE_NAMES.MARKETING} component={Marketing} />
        </Router>
      </Suspense>
    </>
  );
};

export default Routes;
