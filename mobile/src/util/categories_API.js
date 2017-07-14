export const fetchCategories = () => (
  fetch('https://getout-ios.herokuapp.com/api/categories', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);

export const fetchSingleCategory = id => (
  fetch(`https://getout-ios.herokuapp.com/api/categories/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);
