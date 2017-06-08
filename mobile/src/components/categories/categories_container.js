import { connect } from 'react-redux';
import CategoriesIndex from './categories_index';
import { requestCategories } from '../../actions/category_actions';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    categories: state.categories,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    requestCategories: () => dispatch(requestCategories()),
    logout: () => dispatch(logoutUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesIndex);
