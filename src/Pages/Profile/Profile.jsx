// Libraries
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import ImageContainer from "../../Components/Containers/ImageContainer/ImageContainer";

const Profile = () => {
  // Redux hooks
  const { favData } = useSelector((store) => store.profile);
  const { user } = useSelector((store) => store.session);

  // States
  const [pictures, setPictures] = useState([]);
  const [videos, setVideos] = useState([]);

  //  Separate favorites in pictures and videos
  useEffect(() => {
    setPictures(favData.filter((item) => item.src));
    setVideos(favData.filter((item) => item.video_files));
  }, [favData]);

  return (
    <div className="flex flex-col justify-center items-center m-autos w-screen mt-20 text-2xl">
      <h2>Profile:</h2>
      <p>User: {user.displayName}</p>
      <p>Email: {user.email}</p>

      <h3 className="mt-5">Favorites:</h3>
      {pictures.length > 0 ? (
        <ImageContainer data={pictures} title="PICTURES" />
      ) : (
        <p>No pictures</p>
      )}

      {videos.length > 0 ? (
        <ImageContainer data={videos} title="VIDEOS" />
      ) : (
        <p>No videos</p>
      )}
    </div>
  );
};

export default Profile;
