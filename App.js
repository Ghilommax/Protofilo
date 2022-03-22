
import './App.css';
import React, { Suspense }  from 'react';
import {Route, Redirect ,Switch} from 'react-router-dom';
import Loader from './Loader';
const Pro = React.lazy(()=> import('./components/project'))
const Welcome = React.lazy(()=> import('./components/main'))
const Contact = React.lazy(()=> import('./components/contact'))


function App() {
  return (<div>
  <Suspense fallback = {<Loader/>}>
    <Switch>
    <Route path= '/' exact>
        <Redirect to= './welcome' />
    </Route>
    <Route path= '/welcome'>
    <Welcome/>
   </Route>
    <Route path= '/pro' exact >
     <Pro/>
   </Route>
   <Route path= '/contact'exact>
     <Contact/>
   </Route>
    </Switch>
  </Suspense>
  </div>
  );
}

export default App;
