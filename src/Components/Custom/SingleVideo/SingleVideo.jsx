// Libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import PropTypes from "prop-types";

// Modals
import Modals from "../../../Modals/Modals";

// actions
import { handleAddFavDataAction } from "../../../redux/actions/profile.action";

const SingleVideo = ({ data, isFavData }) => {
  // Redux dispatch
  const dispatch = useDispatch();

  // States
  const [isOpen, setIsOpen] = useState(false);

  const handleAddFavData = () => {
    dispatch(handleAddFavDataAction(data, isFavData));
  };

  return (
    <div>
      {data.video_files && (
        <figure>
          <video width="360" height="240" controls muted>
            <source src={data?.video_files[0]?.link} type="video/mp4" />
          </video>
          <figcaption className="flex justify-between w-5/6">
            <AiOutlineHeart
              className={`text-${
                isFavData ? "red" : "black"
              } cursor-pointer z-50`}
              onClick={handleAddFavData}
            />

            <a
              rel="nofollow noopener noreferrer"
              href={data?.user?.url}
              target="_blank"
              className="ml-2 p-1 bg-black text-white rounded"
            >
              {data?.user?.name}
            </a>

            <button className="text-yellow" onClick={() => setIsOpen(true)}>
              Info
            </button>
          </figcaption>

          <Modals open={isOpen} onClose={() => setIsOpen(false)}>
            <video width="360" height="240" controls muted>
              <source src={data?.video_files[0]?.link} type="video/mp4" />
            </video>

            <a
              rel="nofollow noopener noreferrer"
              href={data?.user?.url}
              target="_blank"
              className="ml-2 p-2 bg-black text-white rounded"
            >
              {data?.user?.name}
            </a>

            <p className="p-2">Duration: {data?.duration} s</p>

            <a
              rel="nofollow noopener noreferrer"
              href={data?.url}
              target="_blank"
              className="text-center text-pink p-2"
            >
              Download
            </a>
          </Modals>
        </figure>
      )}
    </div>
  );
};

SingleVideo.propTypes = {
  isFavData: PropTypes.bool.isRequired,
};

export default SingleVideo;
