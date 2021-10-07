import { createSelector } from "reselect";
import _ from "lodash";

const selectShop = state => state.shop;

const COLLECTION_ID_MAP = {
// kinde of enum
        hats: 1,
        sneakers: 2,
        jackets: 3,
        womens: 4,
        mens: 5,
}




export const selectCollections = createSelector(
 
    [selectShop],

    shop => shop.collection
)

export const selectCollectionsForPreview = createSelector(
     [selectCollections],
     
     collections => Object.keys(collections).map((key)=>{
          return collections[key];
     })

);

export const selectCollection =  _.memoize((collectionUrlParam) =>{
 
  return  createSelector(
        [selectCollections],
        collections =>   collections[collectionUrlParam]  
        )
             }

);

    

             