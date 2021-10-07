import React from "react";
import { Route } from "react-router";
 

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from "../collection/collection.component";

    // ShopePage component display using Route thus it has 1-history 2-match and 3-location

const ShopePage = ({match}) =>{

     console.log(match);
     
   // const {history, location, match} = props;
        return (
          <div className= 'shop-page'>
               <Route exact path={`${match.path}`}  component={CollectionOverview} />
               <Route  path={`${match.path}/:collectionId`}  component={CollectionPage} /> 
          </div>
        );


}


export default ShopePage;