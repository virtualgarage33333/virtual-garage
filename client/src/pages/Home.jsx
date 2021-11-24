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

    if (data) {
      setCategory(data.categories);
    }
  }, [data]);


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
