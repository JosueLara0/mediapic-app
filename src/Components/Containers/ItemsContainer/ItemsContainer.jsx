// Libraries
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// Styles
import "./ItemsContainer.styles.css";

// Components
import SinglePicture from "../../Custom/SinglePicture/SinglePicture";
import SingleVideo from "../../Custom/SingleVideo/SingleVideo";

const ItemsContainer = ({ data, title, handleFetchDataNextPage }) => {
  // Redux hooks
  const { favData } = useSelector((store) => store.profile);

  return (
    <div
      className={`w-11/12 m-auto mt-1 ${
        title === "WELCOME!" ? "md:mt-20" : ""
      }  mb-20 md:mb-0 text-center`}
    >
      <h2 className="p-5 font-bold text-2xl md:text-3xl text-red">{title}</h2>
      <div
        className={`  ${
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
              <SinglePicture
                key={item.id}
                data={item}
                isFavData={favData.some((photo) => photo.id === item.id)}
              />
            ))}
      </div>

      {data?.length >= 20 ? (
        <button
          onClick={(e) => handleFetchDataNextPage(e)}
          className="cursor-pointer m-10 px-8 py-4 rounded-2xl bg-red hover:opacity-75 text-white"
        >
          {title === "VIDEOS" ? "More videos" : "More Pictures"}
        </button>
      ) : null}
    </div>
  );
};

ItemsContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default ItemsContainer;
