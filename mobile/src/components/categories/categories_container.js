import { connect } from 'react-redux';
import CategoriesIndex from './categories_index';
import { requestCategories } from '../../actions/category_actions';
import { fetchCurrentUser, logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
    categories: state.categories,
    currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
    requestCategories: () => dispatch(requestCategories()),
    fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
    logout: () => dispatch(logoutUser())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesIndex);
