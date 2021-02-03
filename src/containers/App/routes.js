import React from 'react';
import Introduction from '../Introduction/index';
import Projects from '../Projects/index';
/** Import BrowseRouter */
import { Route, Switch, Redirect } from 'react-router-dom';

const config = [
     {
          path : '/',
          component : (props) => <Introduction {...props} />
     },
     {
          path: '/projects',
          component : (props) => <Projects {...props} />
     }
]


const AppRoutes = (props) => {
     return (
          <>
               <Switch>
                    {
                         config.map((route,i)=>
                         <Route path={route.path} exact={true} key={i}>
                              {
                                   route.component(props)
                              }
                         </Route>
                         )
                    }
                   
               </Switch>
          </>
     )
}

export default AppRoutes
