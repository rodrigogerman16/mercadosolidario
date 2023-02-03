export const fetchData = () => {
    setTimeout(() => {
      setPage(page + 1);
      setCurrent([
        ...current,
        ...data.slice((page - 1) * perPage, page * perPage),
      ]);
      if (page * perPage >= data.length) {
        setHasMore(false);
      }
    }, 300);
};

export const searchHandler = async (e) => {
    const value = e.target.value;
    setInput(value);
    !input
      ? data

      : setCurrent(
          data.filter((e) =>
            e.title.toLowerCase().includes(input.toLowerCase())
          )
        );

};
