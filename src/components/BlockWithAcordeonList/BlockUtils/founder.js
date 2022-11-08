export function applyFounder({
  searchParam = '',
  searchQuery = null,
  data = [],
}) {
  return data.filter(el => {
    if (typeof el[searchParam] === 'number') {
      return !(
        searchQuery &&
        !el[searchParam]
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }
    if (typeof el[searchParam] === 'string') {
      return !(
        searchQuery &&
        !el[searchParam].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true
    // return !(
    //   searchQuery &&
    //   !el[searchParam].toLowerCase().includes(searchQuery.toLowerCase())
    // );
  });
}
