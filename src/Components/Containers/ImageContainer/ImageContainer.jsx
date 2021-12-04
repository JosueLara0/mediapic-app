// Libraries
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// Styles
import "./ImageContainer.styles.css";

// Components
import SinglePhoto from "../../Custom/SinglePhoto/SinglePhoto";
import SingleVideo from "../../Custom/SingleVideo/SingleVideo";

const ImageContainer = ({ data, title, handleFetchDataNextPage }) => {
  // States
  const [isVisible, setIsVisible] = useState(false);

  // Ref
  const containerRef = useRef(null);

  // Redux hooks
  const { favData } = useSelector((store) => store.profile);

  // Functions
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(callbackFunction, options);

    const containerRefCurrent = containerRef.current;

    if (data?.length > 29) {
      if (containerRefCurrent) {
        observer.observe(containerRefCurrent);
      }
    }

    // Clean observer
    return () => {
      if (containerRefCurrent) observer.unobserve(containerRefCurrent);
    };
  }, [data]);

  useEffect(() => {
    if (isVisible) {
      handleFetchDataNextPage();
    }
  }, [isVisible, handleFetchDataNextPage]);

  return (
    <>
      <h2 className="text-center text-2xl font-bold">{title}</h2>
      <div
        className={`mt-20  ${
          title === "VIDEOS" ? "containerVids" : "containerPics"
        }`}
      >
        {title === "VIDEOS"
          ? data?.map((item) => (
              <SingleVideo
                key={item.id}
                data={item}
                isFavData={favData.some((photo) => photo.id === item.id)}
              />
            ))
          : data?.map((item) => (
              <SinglePhoto
                key={item.id}
                data={item}
                isFavData={favData.some((photo) => photo.id === item.id)}
              />
            ))}
      </div>

      <div ref={containerRef} style={{ height: "50px" }}></div>
    </>
  );
};

ImageContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default ImageContainer;
