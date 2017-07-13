import { fetchCategories, fetchSingleCategory } from '../util/categories_api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_SINGLE_CATEGORY = 'RECEIVE_SINGLE_CATEGORY';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories,
});

export const receiveSingleCategory = category => ({
  type: RECEIVE_SINGLE_CATEGORY,
  category,
});

export const requestCategories = () => dispatch => (
    fetchCategories()
      .then(resp => resp.json())
      .then(json => dispatch(receiveCategories(json)))
);

export const requestSingleCategory = id => dispatch => (
    fetchSingleCategory(id)
      .then(resp => resp.json())
      .then(json => dispatch(receiveSingleCategory(json)))
);
