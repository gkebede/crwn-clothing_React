import React from "react";
import { Route } from "react-router";
 

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from "../collection/collection.component";

<<<<<<< HEAD
    // ShopePage component display using Route thus it has 1-history 2-match and 3-location

const ShopePage = ({match}) =>{
=======
class ShopePage extends React.Component {
    
     // INITIAL_STATE  === state
        state = {
            collections: SHOP_DATA
        }
>>>>>>> a5946c2fc1f0dd71eee4b3232b287e84c221c196

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