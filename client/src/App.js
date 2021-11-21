import React, { useState } from 'react';
// import { useMutation } from './utils/mutations';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
//import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar.jsx";
import Announcement from "./components/Announcement";
import { StoreProvider } from "./utils/GlobalState";
import SignupForm from "./components/SignupForm.jsx";
import Success from "./pages/Success";
import NoMatch from "./pages/NoMatch";

// import Cart from "./pages/Cart";
//import AddItem from "./components/AddItem";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
  cache: new InMemoryCache(),
});

const App = () => {
  const [pages] = useState([
    { name: 'Home', },
    { name: 'Browse Collections', },
    { name: 'My Collections', },
  ]);
  
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
  
  
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Announcement />
            <Navbar
              pages={pages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            ></Navbar>
            <Switch>
            <Route exact path="/" component={Home} />
              {/* <Route exact path="/login" component={Login} /> */}
              <Route exact path="/signup" component={SignupForm} />
              <Route exact path="/success" component={Success} />
              {/* <Route exact path="/orderHistory" component={OrderHistory} /> */}
              {/* <Route exact path="/products/:id" component={Detail} /> */}
              <Route component={NoMatch} />
            </Switch>
            {/* {currentPage.name === 'Home' && <Home />}
            {currentPage.name === 'Browse Collections' && <ProductList />} */}
            <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  

  );
};

export default App;
