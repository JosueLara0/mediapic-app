const SearchForm = ({ handleKeyword, handleSearchData }) => {
  return (
    <form
      className="w-11/12 sm:w-3/4 lg:w-1/2 m-auto mt-10 md:mt-24 text-base sm:text-lg"
      onSubmit={handleSearchData}
    >
      <input
        type="text"
        className="w-8/12 sm:w-3/4 p-3 outline-none border-2 border-red rounded-l-lg"
        placeholder="Search by keyword"
        onChange={({ target }) => handleKeyword(target)}
      />
      <input
        type="submit"
        value="Search"
        className="cursor-pointer w-4/12 sm:w-1/4 p-3 border-2 border-red rounded-r-lg bg-red hover:opacity-80 font-bold text-white"
      />
    </form>
  );
};

export default SearchForm;
