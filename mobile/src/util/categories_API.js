export const fetchCategories = () => (
    fetch(`http://localhost:3000/api/categories`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
    })
);