// //#region  NAME SPACE IMPORTING START
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/analytics";

// import firebase from  'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC8FsbZHzkHN6bFvC89_Nyckkcd_jewMXY",

  authDomain: "crwn-db-7618f.firebaseapp.com",

  projectId: "crwn-db-7618f",

  storageBucket: "crwn-db-7618f.appspot.com",

  messagingSenderId: "544736575845",

  appId: "1:544736575845:web:7cdb283ecad71aa441e18c",

  measurementId: "G-S2E4TTDH04",
};


firebase.initializeApp(config);



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// METHOD -- 1  Autentication
export const signInWithGoogle = () => auth.signInWithPopup(provider);




// METHOD -- 2  --- creating user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // const collectionRef = db.collection('users');
  // const collectionSnapshot = await collectionRef.get();
  //  collectionSnapshot.docs.map((doc) => doc.data())


  // const userRef = db.collection('users').doc(`${userAuth.uid}`);
  const userRef = db.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  

  if (!snapShot.exists) {
    // stating what kind of object we want to create if it does not exists
    const { displayName, email } = userAuth;
    const createdAt = new Date();

        try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
        })
         
        } catch (error) {
          if (error.code === 'invalid-email'){
            console.log("Error creating user", error.message);
          }
      
        }
  }
  return userRef;
};

export const cnvertCollectionsSnapshotToMap = collectionsSnapshot => {

  const transformedCollection = collectionsSnapshot.docs.map(doc => {

    const {title, items} = doc.data();

    return {

      routeName: encodeURI (title.toLowerCase ()),
      id: doc.id,
      title,
      items
    }
 
  })
 return transformedCollection.reduce((accumulator, collection) => {

    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;

  }, {})
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

   const collectionRef = db.collection(collectionKey);


   const batch = db.batch();
   objectsToAdd.forEach(obj => {

    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
   })

   return await  batch.commit();
}


export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;

// ==============================================================================
//                  =================================
//                           ==============


 //#endregion  NAME SPACE IMPORTING END

// //#region MODULE IMPORTING START
// //module importing

//     import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//     import { initializeApp } from 'firebase/app';
//     import { getAnalytics } from "firebase/analytics";
//     //, collection, getDocs
//     import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
//     // FacebookAuthProvider, TwitterAuthProvider
//     import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

//     const config = {

//         apiKey: "AIzaSyC8FsbZHzkHN6bFvC89_Nyckkcd_jewMXY",

//         authDomain: "crwn-db-7618f.firebaseapp.com",

//         projectId: "crwn-db-7618f",

//         storageBucket: "crwn-db-7618f.appspot.com",

//         messagingSenderId: "544736575845",

//         appId: "1:544736575845:web:7cdb283ecad71aa441e18c",

//         measurementId: "G-S2E4TTDH04"

//     };

//      // initializing the firebase
//      const app =  initializeApp(config);
//      const analytics = getAnalytics(app);
//    // console.log(analytics);
//     const provider = new GoogleAuthProvider();
//     // const providerf = new FacebookAuthProvider();
//     // const providert = new TwitterAuthProvider();

//     export const auth = getAuth();
//     // const db = getFirestore(app);
//     export const firestore = getFirestore(app);

//     export const createUserProfileDocument = async (userAuth, additionalData) =>{
//         if(!userAuth) return;

//         // const citiesCol = collection(firestore, 'users');
//         // const citySnapshot = await getDocs(citiesCol);
//         // const cityList = citySnapshot.docs.map(doc => doc.data());
//         // return cityList;

//       // const userRef = collection(firestore,`users/${userAuth.uid}`);
//        const userRef = collection(firestore,`${userAuth.uid}`);
//        const snapshot =  (await getDocs(userRef)).docs.find(x=> x.id === userAuth.uid);
//       // const snapshot = snapshots.docs.map(doc => doc.get(`${userAuth.uid}`));

//        //const userRef = collection(firestore, 'users');

//       //  const snapshot = await userRef.get();     //..get();
//        //const snapshot =   userRef.get();

//        if(!snapshot.exists){
//            // telling stating what kind of object we want to create if it does not exists
//            const {displayName, email} = userAuth;
//             const createdAt = new Date();

//             try {
//                 await userRef.set({
//                     displayName,
//                     email,
//                     createdAt,
//                     ...additionalData
//                 });
//             } catch (error) {
//                 console.log('---', error.message);
//             }

//        }

//        return userRef;

//     }

//      export const signInWithGoogle = () => signInWithPopup(auth, provider )

//#endregion MODULE IMPORTING END
