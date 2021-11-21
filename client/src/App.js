import React, { useState } from 'react';
// import { useMutation } from './utils/mutations';

import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar.jsx";
import Announcement from "./components/Announcement";
// import Cart from "./pages/Cart";
//import AddItem from "./components/AddItem";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () => {
  const [pages] = useState([
    { name: 'Home', },
    { name: 'Browse Collections', },
    { name: 'My Collections', },
  ]);
  
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
  
  <div>
    <Announcement />
    <Navbar
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
    ></Navbar>
    {currentPage.name === 'Home' && <Home />}
    {currentPage.name === 'Browse Collections' && <ProductList />}
    <Footer />
  </div>

  );
};

export default App;
