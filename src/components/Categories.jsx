import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import { Navbar } from "./Navbar";

export const Categories = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);

  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log("data:", data);
  return (
    <div>
      <Navbar />
    </div>
  );
};

/*
product_name
roduct_sub_cat.product_sub_cat_name
*/
