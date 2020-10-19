import React from 'react';

import MidSection from "./components/midSection/midSection.js"

import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div>
    {/* <MidSection /> */}
    <Switch>
    <Route exact path="/" component={MidSection} />
    {/* <Route path ="/CertSelect" component={CertSelect} />
    <Route path="/CertificateFormed" component={CertificateFormed} /> */}

    {/* <LandingAnim /> */}
   {/* <MidSection /> */}
   {/* <CertSelect /> */}
   {/* <CertificateFormed /> */}
   </Switch>
    </div></BrowserRouter>
  );
}

export default App;
