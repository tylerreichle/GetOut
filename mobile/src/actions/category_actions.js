import { fetchCategories } from '../util/categories_API';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories
});

export const requestCategories = () => (dispatch) => (
    fetchCategories()
        .then(resp => resp.json())
        .then(json => dispatch(receiveCategories(json)))
);