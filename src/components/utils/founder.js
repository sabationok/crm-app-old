export function applyFounder({
  param = '',
  searchQuery = '',
  data = [],
  setFoundedData,
}) {
  return data.filter(el => {
    if (typeof el[param] === 'number') {
      return !(
        searchQuery &&
        !el[param].toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return !(
      searchQuery &&
      !el[param].toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
}
