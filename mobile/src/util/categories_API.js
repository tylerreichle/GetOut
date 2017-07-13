export const fetchCategories = () => (
  fetch('http://localhost:3000/api/categories', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);

export const fetchSingleCategory = id => (
  fetch(`http://localhost:3000/api/categories/${id}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
);
