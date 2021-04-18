import React, { useState } from "react";
import ResultList from "../components/ResultList";
import Search from "../components/Search";
import API from "../utils/API";

const Home = () => {
  const [searchTerm, setSearch] = useState("");
  const [searchInfo, setInfo] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    API.googleBooks(searchTerm).then((res) => setInfo(res.data.items));
  };

  return (
    <>
      <Search searchFn={handleChange} clickFn={handleClick} />
      <h2>{searchTerm}</h2>
      <ResultList list={searchInfo} />
    </>
  );
};

export default Home;
