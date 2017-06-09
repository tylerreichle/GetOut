import { RECEIVE_SINGLE_CATEGORY } from '../actions/category_actions';

const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SINGLE_CATEGORY:
          return action.category;
        default:
          return state;
    }
};

export default categoryReducer;