/* eslint-disable prettier/prettier */
/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import GeneralBuildingConstraintPage from './containers/GeneralBuildingConstraint';
import GeneralBuildingInfoPage from './containers/GeneralBuildingInfoPage';
import HomePage from './containers/HomePage';
import { ProgramUpdatePage } from './containers/ProgramUpdatePage';
import { GeneralInfoStartPage, GeneralSpatialInfoPage, ProjectTransitionPage } from './containers/ProjectTransitionPage';
import TargetMetricPage from './containers/TargetMetricPage';

// Lazily load routes and code split with webpack
const LazyCounterPage = React.lazy(() =>
  import(/* webpackChunkName: "CounterPage" */ './containers/CounterPage')
);

const CounterPage = (props: Record<string, any>) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <LazyCounterPage {...props} />
  </React.Suspense>
);

/*
  MAKE SURE TO ONLY ADD ROUTES **BEFORE** THE HOME ROUTE
  OTHERWISE THE HOME ROUTE WILL BE PICKED FIRST
*/
export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.INFO.TARGETS} component={TargetMetricPage} />
        <Route path={routes.INFO.CONSTRAINTS} component={GeneralBuildingConstraintPage} />
        <Route path={routes.INFO.SPATIAL} component={GeneralSpatialInfoPage} />
        <Route path={routes.INFO.GENERAL} component={GeneralBuildingInfoPage} />
        <Route path={routes.INFO.START} component={GeneralInfoStartPage} />
        <Route path={routes.PROJECT} component={ProjectTransitionPage} />
        {/* <Route path={routes.PROJECT} component={ProgramUpdatePage} /> */}
        <Route path={routes.HOME} component={HomePage} />
      </Switch>
    </App>
  );
}
