import React from 'react';
import AppRoutes from './routes';
import HeaderNav from '../../components/Header/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';

const App = (props) => {
     return (
          <div className='main_app_container'>
               <HeaderNav/>
               <AppRoutes {...props}/>
          </div>
     )
}

export default App
