import React from 'react';
import AppRoutes from './routes';
import HeaderNav from '../../components/Header/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
     return (
          <div>
               <HeaderNav/>
               <AppRoutes {...props}/>
          </div>
     )
}

export default App
