import React from "react";
import { Route } from "react-router";
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
 

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from "../collection/collection.component";

import {db, cnvertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import updateCollections from '../../redux/shop/shop.action';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWtihSpinner = WithSpinner(CollectionPage);

    // ShopePage component display using Route thus it has 1-history 2-match and 3-location
   // const {history, location, match} = props;


     class ShopePage extends React.Component {
     
          state = {loading: true}
          unSubscribeFromSnapshot = null;

          componentDidMount() {

               const {updateCollections} = this.props;
               const collectionRef = db.collection('collections');

             this.unSubscribeFromSnapshot =  collectionRef.onSnapshot(async (snapshot) => {

                      const collectionsMap =   cnvertCollectionsSnapshotToMap(snapshot)

                      updateCollections(collectionsMap);

                      this.setState({loading: false})

               })

          }

   render() {

     const {match} = this.props;
     const { loading } = this.state;
        return (
          <div className= 'shop-page'>
               <Route exact path={`${match.path}`} 
                 render = {(props) => < CollectionOverviewWithSpinner isLoading={loading} {...props} />}
               />
               <Route  path={`${match.path}/:collectionId`}
                 render = {(props) => < CollectionPageWtihSpinner isLoading={loading} {...props} />}
                 />
          </div>
        );
   }


}

const mapDispatchToProps = dispatch => ({

     updateCollections: collectionsMap => 
      dispatch(updateCollections(collectionsMap))
     

})

export default connect(null,mapDispatchToProps)(ShopePage);