// Libraries
import React, { useState, useEffect } from "react";

// Components
import ItemsContainer from "../../Components/Containers/ItemsContainer/ItemsContainer";
import Loader from "../../Components/Custom/Loader/Loader";

const Home = () => {
  // States
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState("");

  // Load a first view of pictures with a random query
  useEffect(() => {
    // Set random query
    const query = ["nature", "office", "movies", "animals", "space"];
    const random = Math.floor(Math.random() * (query.length - 1)) + 1;
    const keyword = query[random];

    const handleFetchToken = async () => {
      const request = await fetch(
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=20`,
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
    handleFetchToken();

    return () => {
      setData([]);
    };
  }, []);

  // Load additional pictures when you press more pictures button
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
      {data.length >= 20 ? (
        <ItemsContainer
          data={data}
          title="WELCOME!"
          handleFetchDataNextPage={handleFetchDataNextPage}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
