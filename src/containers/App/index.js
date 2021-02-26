import React from 'react';
import AppRoutes from './routes';
import HeaderNav from '../../components/Header/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { useLocation, useHistory } from 'react-router-dom';

class ErrorBoundary extends React.Component {
     constructor(props) {
       super(props);
       this.state = { error: null, errorInfo: null };
     }
     componentDidCatch(error, errorInfo) {
       this.setState({
         error: error,
         errorInfo: errorInfo,
       });
     }
     render() {
       if (this.state.errorInfo) {
         return (
           <div>
             <h2>Something went wrong.</h2>
             <details style={{ whiteSpace: "pre-wrap" }}>
               {this.state.error && this.state.error.toString()}
               <br />
               {this.state.errorInfo.componentStack}
             </details>
           </div>
         );
       }
       return this.props.children;
     }
   }

const App = (props) => {
     const history = useHistory();
     const location = useLocation();
     return (
          <div className='main_app_container'>
               <ErrorBoundary>
                    <HeaderNav/>
                    <AppRoutes {...props} loaction={location} history={history}/>
               </ErrorBoundary>
          </div>
     )
}

export default App
