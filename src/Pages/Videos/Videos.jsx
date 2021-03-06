// Libraries
import React, { useState } from "react";

// Components
import SearchForm from "../../Components/Custom/SearchForm/SearchForm";
import ItemsContainer from "../../Components/Containers/ItemsContainer/ItemsContainer";

const Videos = () => {
  // States
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [videos, setVideos] = useState("");

  // Save the video input search on submit
  const handleKeyword = ({ value }) => setVideos(value);

  // Load videos with the input search
  const handleSearchData = async (e) => {
    e.preventDefault();
    const request = await fetch(
      `https://api.pexels.com/videos/search?query=${videos}&per_page=20`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_API_KEY_PEXELS}`,
        },
      }
    );
    const result = await request.json();
    setData(result.videos);
    setNextPage(result.next_page);
  };

  // Load additional videos when you press the more videos button
  const handleFetchDataNextPage = async (e) => {
    e.preventDefault();
    const request = await fetch(nextPage, {
      headers: {
        Authorization: `${process.env.REACT_APP_API_KEY_PEXELS}`,
      },
    });
    const result = await request.json();
    setNextPage(result.next_page);
    setData([...data, ...result.videos]);
  };

  return (
    <>
      <SearchForm
        handleKeyword={handleKeyword}
        handleSearchData={handleSearchData}
      />
      <ItemsContainer
        data={data}
        title="VIDEOS"
        handleFetchDataNextPage={handleFetchDataNextPage}
      />
    </>
  );
};

export default Videos;
