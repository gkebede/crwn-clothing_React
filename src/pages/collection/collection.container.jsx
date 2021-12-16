
// this code is to make the shop component to make
// as dump as posible about the propery that it doesn't need for itself
// we make sure we put THE STATE belong to component that display UI

// *** boosting CollectionPage with its own props and extra features.


import {connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionPage from "./collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(false)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
           WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

