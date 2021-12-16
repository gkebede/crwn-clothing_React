
import ShopActionTypes from './shop.type';

import { db, cnvertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const fetchCollectionsStart = () => {

   return {

        type:  ShopActionTypes.FETCH_COLLECTION_START
   }
}

export const fetchCollectionsSuccess = collectionsMap => ({

   type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
   payload: collectionsMap

})

export const fetchCollectionsFailure = errorMessage => ({

   type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
   payload: errorMessage

})

export const fetchCollectionsStartAsync = () => {
   return dispatch => {

      const collectionRef = db.collection('collections');

      dispatch(fetchCollectionsStart())

     collectionRef.get().then(snapshot =>  {

             const collectionsMap =   cnvertCollectionsSnapshotToMap(snapshot)

             dispatch(fetchCollectionsSuccess(collectionsMap))
         

      }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
   }
   
}




// export default updateCollections;