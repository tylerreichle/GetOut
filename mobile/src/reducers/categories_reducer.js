import { RECEIVE_CATEGORIES, RECEIVE_SINGLE_CATEGORY } from '../actions/category_actions';

const categoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
};

export default categoriesReducer;