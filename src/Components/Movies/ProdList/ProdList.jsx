import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { Grid, Pagination } from "@mui/material";
import { useProductContext } from "../../../Contexts/MoviesContextProvider";
import OneProduct from "../OneProduct/OneProduct";
import { PRODUCTS_LIMIT } from "../../../Helpers/consts";
import Filter from "../Filter/Filter";
import MySkeleton from "../../Skeleton/MySkeleton";
import LiveSearch from "../../LiveSearch/LiveSearch";

const ProdList = () => {
  const { getProducts, products, pageTotalCount } = useProductContext();

  const [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = useState(+searchParams.get("_page") || 1);

  // FILTER
  // console.log(searchParams.get("type"));
  const [type, setType] = useState(searchParams.get("врач") || "all");

  const paramsWithType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: page,
      врач: type,
      q: searchParams.get("q") || "",
    };
  };

  const paramsNoType = () => {
    return {
      _limit: PRODUCTS_LIMIT,
      _page: page,
      q: searchParams.get("q") || "",
    };
  };

  // Чтобы в самом начале рождения компонента установить query params == параметры запроса, и именно по ним делать запрос getProducts()
  useEffect(() => {
    if (searchParams.get("type")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [page, type]);

  //reset
  const handleReset = () => {
    setType("all");
    setSearchParams({
      _limit: PRODUCTS_LIMIT,
      _page: page,
      q: "",
    });
  };

  return (
    <>
      <LiveSearch />
      {/* <Filter
        setPage={setPage}
        type={type}
        setType={setType}
        handleReset={handleReset}
      /> */}
      <Grid container spacing={2}>
        {products && products.length > 0 ? (
          products.map((item) => <OneProduct key={item.id} item={item} />)
        ) : (
          <MySkeleton />
        )}
      </Grid>
    </>
  );
};

export default ProdList;
