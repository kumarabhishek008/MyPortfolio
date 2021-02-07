import React from 'react';
import AppRoutes from './routes';
import HeaderNav from '../../components/Header/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { useLocation, useHistory } from 'react-router-dom';

const App = (props) => {
     const history = useHistory();
     const location = useLocation();
     return (
          <div className='main_app_container'>
               <HeaderNav/>
               <AppRoutes {...props} loaction={location} history={history}/>
          </div>
     )
}

export default App
