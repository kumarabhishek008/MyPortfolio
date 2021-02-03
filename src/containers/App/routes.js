import React from "react";
import Introduction from "../Introduction/index";
import Projects from "../Projects/index";
import Skills from "../Skills/index";
import About from "../About/index";
/** Import BrowseRouter */
import { Route, Switch, Redirect } from "react-router-dom";

const config = [
  {
    path: "/",
    component: (props) => <Introduction {...props} />,
  },
  {
    path: "/projects",
    component: (props) => <Projects {...props} />,
  },
  {
    path: "/skills",
    component: (props) => <Skills {...props} />,
  },
  {
    path: "/about",
    component: (props) => <About {...props} />,
  },
];

const AppRoutes = (props) => {
  return (
    <>
      {/* <Switch>
                    {
                         config.map((route,i)=>
                         <Route path={route.path} exact={true} key={i}>
                              {
                                   route.component(props)
                              }
                         </Route>
                         )
                    }
               </Switch> */}
      <Introduction {...props} />
      {/* <About {...props} /> */}
      <Projects {...props} />
      <Skills {...props} />
    </>
  );
};

export default AppRoutes;
