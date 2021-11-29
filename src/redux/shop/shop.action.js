
import ShopActionTypes from './shop.type';

const updateCollections = (collectionsMap) => {
 
   return {

        type:  ShopActionTypes.UPDATE_COLLECTION,
        payload: collectionsMap
   }
}

export default updateCollections;