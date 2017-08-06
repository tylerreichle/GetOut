import { connect } from 'react-redux';
import CategoriesIndex from './CategoriesIndex';
import { requestCategories } from '../../actions/category_actions';
import { fetchCurrentUser, logoutUser } from '../../actions/session_actions';

const mapStateToProps = ({ categories, session }) => ({
  categories,
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  requestCategories: () => dispatch(requestCategories()),
  fetchCurrentUser: id => dispatch(fetchCurrentUser(id)),
  logout: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesIndex);
