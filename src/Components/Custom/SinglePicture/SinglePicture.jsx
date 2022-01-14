// Libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// React icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { IoOptions } from "react-icons/io5";

// Styles
import "./SinglePicture.styles.css";

// Modals
import Modals from "../../../Modals/Modals";

// actions
import { handleAddFavDataAction } from "../../../redux/actions/profile.action";

const SinglePicture = ({ data, isFavData }) => {
  // Redux dispatch
  const dispatch = useDispatch();

  // States
  const [isOpen, setIsOpen] = useState(false);

  // Add picture to favorites
  const handleAddFavData = () => {
    dispatch(handleAddFavDataAction(data, isFavData));
  };

  return (
    <>
      {data.src && (
        <figure>
          <img src={data?.src?.large} alt="Not Available" />
          <figcaption className="w-11/12 flex items-center justify-between">
            {isFavData ? (
              <AiFillHeart
                className="cursor-pointer z-50 text-red text-2xl hover:opacity-75"
                onClick={handleAddFavData}
              />
            ) : (
              <AiOutlineHeart
                className="cursor-pointer z-50 text-white text-2xl hover:opacity-75"
                onClick={handleAddFavData}
              />
            )}

            <a
              rel="nofollow noopener noreferrer"
              href={data?.photographer_url}
              target="_blank"
              className="font-bold text-white text-lg hover:opacity-75"
            >
              {data?.photographer}
            </a>

            <button
              className="text-yellow text-2xl hover:opacity-75"
              onClick={() => setIsOpen(true)}
            >
              <IoOptions />
            </button>
          </figcaption>

          <Modals open={isOpen} onClose={() => setIsOpen(false)}>
            <img
              src={data?.src.large}
              alt="Not Available"
              className="modal__img "
            />

            <a
              rel="nofollow noopener noreferrer"
              href={data?.photographer_url}
              target="_blank"
              className="mt-2 font-bold text-xl hover:opacity-75"
            >
              <span>{data?.photographer}</span>
            </a>

            <a
              rel="nofollow noopener noreferrer"
              href={data?.url}
              target="_blank"
              className="mt-4 text-green text-3xl hover:opacity-75"
            >
              <HiDownload />
            </a>
          </Modals>
        </figure>
      )}
    </>
  );
};

SinglePicture.propTypes = {
  isFavData: PropTypes.bool.isRequired,
};

export default SinglePicture;
