const AnimalFilter = ({ filterstate }) => {
  const [filterVal, setFilterVal] = filterstate;
  return (
    <input
      type="text"
      value={filterVal}
      onChange={(e) => setFilterVal(e.target.value)}
    />
  );
};

export default AnimalFilter;
