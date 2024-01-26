function Filter({ movies, setFiltred }) {
  const handleTitleSearch = (e) => {
    const titleRegex = new RegExp(e.target.value, "i");
    const filtred = movies.filter((el) => {
      return titleRegex.test(el.title);
    });

    setFiltred(filtred);
  };
  const handleRatingSearch = (e) => {
    const filtred = movies.filter((el) => {
      return (
        el.rating >= parseFloat(e.target.value) &&
        el.rating <= parseFloat(e.target.value) + 0.9
      );
    });

    setFiltred(filtred);
  };

  return (
    <div className="filter">
      <input
        color="indigo"
        label="Input Indigo"
        type="text"
        onChange={handleTitleSearch}
        placeholder="type movie name"
      />
      <input
        type="text"
        color="blue"
        label="Input Blue"
        onChange={handleRatingSearch}
        placeholder="search with rating"
      />
    </div>
  );
}
export default Filter;
