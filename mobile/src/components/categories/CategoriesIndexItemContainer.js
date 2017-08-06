import { connect } from 'react-redux';
import CategoriesIndexItem from './CategoriesIndexItem';
import { requestSingleCategory } from '../../actions/category_actions';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = ({ categories, category, session }, ownProps) => ({
  categories,
  category,
  currentUser: session,
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

