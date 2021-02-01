// Global Dependencies
import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { StoreProvider } from "./utils/GlobalState";

// Re-Use for possible new logo


// Imports from Pages/Components to build pages for Website
import Home from "./pages/Home";
import Dashlogin from './pages/Dashlogin';
import Dashboard from './pages/Dashboard';
import About from "./pages/Navinfo/About"
import Contact from "./pages/Navinfo/Contact"
import Services from "./pages/Navinfo/Services"
import DashSign from "./pages/DashSign"
import CheckStatus from "./pages/Checkstatus"

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        <StoreProvider>
            {/* <Nav /> */}
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path="/Services" component={Services} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/CheckStatus" component={CheckStatus} /> 
              <Route exact path='/f9MecEJ2vtKaYM3rEh48' component= {Dashlogin} />
              <Route exact path='/t01ZUNtMmCdpJdMX71hI' component= {Dashboard} />
              <Route exact path='/KuceCU3bbD3EmURTEwty' component= {DashSign} />
              {/* <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} /> */}
              {/* <Route component={NoMatch} /> */}
            </Switch>
            </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;