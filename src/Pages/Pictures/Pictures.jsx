// Libraries
import React, { useState } from "react";

// Components
import SearchForm from "../../Components/Custom/SearchForm/SearchForm";
import ItemsContainer from "../../Components/Containers/ItemsContainer/ItemsContainer";

const Pictures = () => {
  // States
  const [data, setData] = useState([]);
  const [pictures, setPictures] = useState("");
  const [nextPage, setNextPage] = useState("");

  // Save the picture input search on submit
  const handleKeyword = ({ value }) => setPictures(value);

  // Load pictures with the input search
  const handleSearchData = async (e) => {
    e.preventDefault();
    const request = await fetch(
      `https://api.pexels.com/v1/search?query=${pictures}&per_page=20`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_API_KEY_PEXELS}`,
        },
      }
    );
    const result = await request.json();
    setData(result.photos);
    setNextPage(result.next_page);
  };

  // Load additional pictures when you when you press the more pictures button
  const handleFetchDataNextPage = async (e) => {
    e.preventDefault();
    const request = await fetch(nextPage, {
      headers: {
        Authorization: `${process.env.REACT_APP_API_KEY_PEXELS}`,
      },
    });
    const result = await request.json();
    setNextPage(result.next_page);
    setData([...data, ...result.photos]);
  };

  return (
    <>
      <SearchForm
        handleKeyword={handleKeyword}
        handleSearchData={handleSearchData}
      />
      <ItemsContainer
        data={data}
        title="PICTURES"
        handleFetchDataNextPage={handleFetchDataNextPage}
      />
    </>
  );
};

export default Pictures;
