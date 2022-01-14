// Libraries
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import ItemsContainer from "../../Components/Containers/ItemsContainer/ItemsContainer";

const Profile = () => {
  // States
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);

  // Redux hooks
  const { favData } = useSelector((store) => store.profile);
  const { user } = useSelector((store) => store.session);

  // Separate favorites in pictures and videos
  useEffect(() => {
    setPictures(favData.filter((item) => item.src));
    setVideos(favData.filter((item) => item.video_files));
  }, [favData]);

  return (
    <div className="flex flex-col justify-center items-center w-full m-auto mt-10 md:mt-24">
      <div className="w-auto p-2 sm:p-4 bg-red rounded-xl font-medium sm:font-semibold text-white text-sm sm:text-lg">
        <h2 className="mb-2 font-bold text-center text-3xl">Profile</h2>
        <p>User: {user.displayName}</p>
        <p>Email: {user.email}</p>
      </div>

      {pictures.length > 0 ? (
        <ItemsContainer data={pictures} title="PICTURES" />
      ) : (
        <p className="m-5 font-semibold text-red text-2xl">No pictures saved</p>
      )}

      {videos.length > 0 ? (
        <ItemsContainer data={videos} title="VIDEOS" />
      ) : (
        <p className="mb-24 md:m-10 font-semibold text-red text-2xl">
          No videos saved
        </p>
      )}
    </div>
  );
};

export default Profile;
