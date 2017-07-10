import { connect } from 'react-redux';
import CategoriesIndexItem from './CategoryIndexItem';
import { requestSingleCategory } from '../../actions/category_actions';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories,
  category: state.category,
  currentUser: state.session,
  categoryId: ownProps.data,
});

const mapDispatchToProps = dispatch => ({
  requestSingleCategory: id => dispatch(requestSingleCategory(id)),
  logout: () => dispatch(logoutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesIndexItem);

