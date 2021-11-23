import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar.jsx";
import Announcement from "./components/Announcement";
import { StoreProvider } from "./utils/GlobalState";
import SignupForm from "./components/SignupForm.jsx";
import Success from "./pages/Success";
import NoMatch from "./pages/NoMatch";
import {setContext} from '@apollo/client/link/context';
//import OrderHistory from "./pages/OrderHistory";

// import Cart from "./pages/Cart";
//import AddItem from "./components/AddItem";
const httpLink = createHttpLink({
  uri: '/graphql'
})

const authenticationLink = setContext((_,{headers})=>{
  const token = localStorage.getItem('id_token')
 return{headers: {
   ...headers,
  authorization: token ? `Bearer ${token}` : ''
}
 }})
const client = new ApolloClient({
  link: authenticationLink.concat(httpLink),
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Announcement />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignupForm} />
              <Route exact path="/success" component={Success} />
              <Route path="/products/:category" component={ProductList} />
              {/* <Route exact path="/orderHistory" component={OrderHistory} /> */}
              {/* <Route exact path="/login" component={Login} /> */}
              {/* <Route exact path="/products/:id" component={Detail} /> */}
              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
