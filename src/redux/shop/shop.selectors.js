import { createSelector } from "reselect";
import _ from "lodash";

const selectShop = state => state.shop;

// const COLLECTION_ID_MAP = {
// // kinde of enum
//         hats: 1,
//         sneakers: 2,
//         jackets: 3,
//         womens: 4,
//         mens: 5,
// }




export const selectCollections = createSelector(
 
    [selectShop],

    shop => shop.collections

)

export const selectCollectionsForPreview = createSelector(
     [selectCollections],
     
      collections => collections ?  Object.keys(collections).map(key => collections[key]) : []

     // collections => collections ?  Object.keys(collections).map((key)=>{
     //      return collections[key] : [];
     // })

);

export const selectCollection =  _.memoize((collectionUrlParam) =>{
 
  return  createSelector(
        [selectCollections],
        collections => (collections ? collections[collectionUrlParam]  : null)
        )
             }

);

export const selectCollectionFetching =  createSelector(

     [selectShop],
     shop => shop.isFetching

)

export const selectIsCollectionsLoaded = createSelector(
     [selectShop],
     
     shop => !!shop.collections
)

    


             