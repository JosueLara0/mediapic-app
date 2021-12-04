// Libraries
import React, { useState } from "react";

// Components
import SearchForm from "../../Components/Custom/SearchForm/SearchForm";
import ImageContainer from "../../Components/Containers/ImageContainer/ImageContainer";

const Images = () => {
  // States
  const [images, setImages] = useState("");
  const [data, setData] = useState(null);

  // Functions
  const handleKeyword = ({ value }) => setImages(value);

  const handleSearchData = async (e) => {
    e.preventDefault();
    const request = await fetch(
      `https://api.pexels.com/v1/search?query=${images}&per_page=20`,
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
      <ImageContainer data={data?.photos} title="PICTURES" />
    </div>
  );
};

export default Images;
