import { RECEIVE_CATEGORIES } from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};

export default categoriesReducer;
