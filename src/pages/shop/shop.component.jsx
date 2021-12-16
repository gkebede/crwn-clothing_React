import React from "react";
import { Route } from "react-router";
import { connect } from 'react-redux';

 

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from "../collection/collection.container";

//import {db, cnvertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import {fetchCollectionsStartAsync} from '../../redux/shop/shop.action'



    // ShopePage component display using Route thus it has 1-history 2-match and 3-location
   // const {history, location, match} = props;


     class ShopePage extends React.Component {
     
          componentDidMount() {

            const { fetchCollectionsStartAsync } = this.props;

            fetchCollectionsStartAsync();

          }

   render() {

     const { match } = this.props;
        return (
          <div className= 'shop-page'>
             <Route  path={`${match.path}`}
                component= {CollectionOverviewContainer}
                 />
               <Route  path={`${match.path}/:collectionId`}
                 
                 component= {CollectionPageContainer}
               />
              
          </div>
        );
   }


}



// instance of collections, isFetching, and errorMessage == fetchCollectionsStartAsync
const mapDispatchToProps = dispatch => ({

   //  updateCollections: collectionsMap => 
    //  dispatch(updateCollections(collectionsMap))
     fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())

})

export default connect(null,mapDispatchToProps)(ShopePage);