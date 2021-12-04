// Libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import PropTypes from "prop-types";

// Modals
import Modals from "../../../Modals/Modals";

// actions
import { handleAddFavDataAction } from "../../../redux/actions/profile.action";

const SinglePhoto = ({ data, isFavData }) => {
  // Redux dispatch
  const dispatch = useDispatch();

  // States
  const [isOpen, setIsOpen] = useState(false);

  const handleAddFavData = () => {
    dispatch(handleAddFavDataAction(data, isFavData));
  };

  return (
    <figure>
      <img
        src={data?.src.large}
        alt="A windmill"
        onClick={() => setIsOpen(true)}
      />
      <figcaption className="flex justify-between w-full">
        <AiOutlineHeart
          className={`text-${isFavData ? "red" : "black"} cursor-pointer z-50`}
          onClick={handleAddFavData}
        />

        <a
          rel="nofollow noopener noreferrer"
          href={data?.photographer_url}
          target="_blank"
          className="ml-2"
        >
          {data?.photographer}
        </a>

        <button className="text-yellow" onClick={() => setIsOpen(true)}>
          Info
        </button>
      </figcaption>

      <Modals open={isOpen} onClose={() => setIsOpen(false)}>
        <img src={data?.src.medium} alt="A windmill" />

        <a
          rel="nofollow noopener noreferrer"
          href={data?.photographer_url}
          target="_blank"
          className="p-2"
        >
          Author: <span className="text-yellow">{data?.photographer} </span>
        </a>

        <a
          rel="nofollow noopener noreferrer"
          href={data?.url}
          target="_blank"
          className=" p-2 text-center text-pink"
        >
          Download
        </a>
      </Modals>
    </figure>
  );
};

SinglePhoto.propTypes = {
  isFavData: PropTypes.bool.isRequired,
};

export default SinglePhoto;
