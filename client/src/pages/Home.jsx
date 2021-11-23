import Slider from "../components/Slider.jsx";
import React, { useState, useEffect } from "react";
import Categories from "../components/Categories.jsx";
import { GET_CATEGORY } from "../utils/queries.js";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../utils/actions.js";
import { gql, useQuery } from "@apollo/client";
import { useStoreContext } from "../utils/GlobalState";
import { idbPromise } from "../utils/helpers";

const foo = gql`
  {
    categories {
      _id
      categoryName
    }
  }
`;

const Home = () => {
  const { error, loading, data } = useQuery(GET_CATEGORY, {
    fetchPolicy: "no-cache",
  });
  const [category, setCategory] = useState([]);
  useEffect(() => {
    console.log(data);
    console.log(loading);
    console.log(error);

    if (data) {
      setCategory(data.categories);
    }
  }, [data]);


  /*


const [state, dispatch] = useStoreContext();
const [currentCategory, setCurrentCategory] = useState({});
const {loading, error, data, } = useQuery(foo);
/* useEffect(() => {
  console.log('data is', data, 'loadingis', loading);

  if (data) {
    dispatch({
      type: UPDATE_CATEGORIES,
      categories: data.categories
    });
    data.categories.forEach(category => {
      idbPromise('categories', 'put', category);
    });
  } else if (!loading) {
    idbPromise('categories', 'get').then(categories => {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categories
      });
    });
  }
},  [data, loading, dispatch]);*/

  useEffect(() => {
    //refetch()
    console.log("useeffect data is", data);
  }, [loading]);

  return (
    <div>
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
