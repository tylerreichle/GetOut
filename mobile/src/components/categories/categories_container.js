import { connect } from 'react-redux';
import CategoriesIndex from './categories_index';
import { requestCategories } from '../../actions/category_actions';

const mapStateToProps = (state) => ({
    categories: state.categories
});

const mapDispatchToProps = dispatch => ({
    requestCategories: () => dispatch(requestCategories())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesIndex);