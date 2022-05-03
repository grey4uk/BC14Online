const SearchBar = ({ handleSearch, find }) => {
  return (
    <input
      type='text'
      value={find}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
