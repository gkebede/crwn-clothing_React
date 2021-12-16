
// this code is to make the shop component to make
// as dump as posible about the propery that it doesn't need for itself
// we make sure we put THE STATE belong to component that display UI

// *** boosting CollectionOverView with its own props and extra features.



import {connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionFetching } from '../../redux/shop/shop.selectors';

 import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from './collection-overview.component';

const mapStateToProps = createStructuredSelector({

    isLoading: selectCollectionFetching
})

//const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));
const CollectionOverviewContainer = compose(
                   connect
                   
                   (mapStateToProps),
                          WithSpinner 
)(CollectionOverview);

export default CollectionOverviewContainer;
