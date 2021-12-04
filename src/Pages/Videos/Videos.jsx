// Libraries
import React, { useState } from "react";

// Components
import SearchForm from "../../Components/Custom/SearchForm/SearchForm";
import ImageContainer from "../../Components/Containers/ImageContainer/ImageContainer";

const Videos = () => {
  const [videos, setVideos] = useState("");
  const [data, setData] = useState(null);

  // Functions
  const handleKeyword = ({ value }) => setVideos(value);

  const handleSearchData = async (e) => {
    e.preventDefault();
    const request = await fetch(
      `https://api.pexels.com/videos/search?query=${videos}&per_page=10`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_API_KEY_PEXELS}`,
        },
      }
    );
    const result = await request.json();
    setData(result);
  };
  return (
    <div className="w-3/4 m-auto">
      <SearchForm
        handleKeyword={handleKeyword}
        handleSearchData={handleSearchData}
      />
      <ImageContainer data={data?.videos} title="VIDEOS" />
    </div>
  );
};

export default Videos;
