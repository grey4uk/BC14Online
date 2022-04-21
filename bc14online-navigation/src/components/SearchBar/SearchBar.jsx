const SearchBar = ({ handleSearch, find }) => {
  return (
    <form>
      <input
        type='text'
        value={find}
        onChange={handleSearch}
      />
    </form>
  );
};

export default SearchBar;
