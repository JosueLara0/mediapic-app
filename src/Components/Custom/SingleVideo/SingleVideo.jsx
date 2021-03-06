// Libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// React icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { IoOptions } from "react-icons/io5";

// Styles
import "./SingleVideo.styles.css";

// Modals
import Modals from "../../../Modals/Modals";

// actions
import { handleAddFavDataAction } from "../../../redux/actions/profile.action";

const SingleVideo = ({ data, isFavData }) => {
  // Redux dispatch
  const dispatch = useDispatch();

  // States
  const [isOpen, setIsOpen] = useState(false);

  // Add video to favorites
  const handleAddFavData = () => {
    dispatch(handleAddFavDataAction(data, isFavData));
  };

  return (
    <>
      {data.video_files && (
        <figure>
          <video controls muted>
            <source src={data?.video_files[0]?.link} type="video/mp4" />
          </video>
          <figcaption className="w-full flex items-center justify-between">
            {isFavData ? (
              <AiFillHeart
                className="cursor-pointer text-red text-2xl hover:opacity-75"
                onClick={handleAddFavData}
              />
            ) : (
              <AiOutlineHeart
                className="cursor-pointer text-white text-2xl hover:opacity-75"
                onClick={handleAddFavData}
              />
            )}

            <a
              rel="nofollow noopener noreferrer"
              href={data?.user?.url}
              target="_blank"
              className="font-bold text-white text-lg hover:opacity-75"
            >
              {data?.user?.name}
            </a>

            <button
              className="text-yellow text-2xl hover:opacity-75"
              onClick={() => setIsOpen(true)}
            >
              <IoOptions />
            </button>
          </figcaption>

          <Modals open={isOpen} onClose={() => setIsOpen(false)}>
            <video controls muted className="modal__video">
              <source src={data?.video_files[0]?.link} type="video/mp4" />
            </video>

            <a
              rel="nofollow noopener noreferrer"
              href={data?.user?.url}
              target="_blank"
              className="mt-2 font-bold text-xl hover:opacity-75"
            >
              {data?.user?.name}
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

SingleVideo.propTypes = {
  isFavData: PropTypes.bool.isRequired,
};

export default SingleVideo;
