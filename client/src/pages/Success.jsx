import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import Jumbotron from "../components/Jumbotron.jsx";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



<Route exact path="/success" component={Success} />

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const items = cart.map(item => item._id);
      
      if (items.length) {
        const { data } = await addOrder({ variables: { items } });
        const itemData = data.addOrder.items;
    
        itemData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }
        
      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]); 
  return (
      <div>
        <Jumbotron>
          <h1>Success!</h1>
          <h2>
            Thank you for your purchase!
          </h2>
          <h2>
            You will now be redirected to the homepage
          </h2>
        </Jumbotron>
      </div>
    );
}

    

  export default Success;
