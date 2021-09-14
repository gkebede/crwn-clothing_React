
//#region  NAME SPACE IMPORTING START
//  import firebase from 'firebase/compat/app';
//  import 'firebase/compat/auth';
//  import 'firebase/compat/firestore';
//  import 'firebase/compat/analytics';

// const config = {

//     apiKey: "AIzaSyC8FsbZHzkHN6bFvC89_Nyckkcd_jewMXY",
  
//     authDomain: "crwn-db-7618f.firebaseapp.com",
  
//     projectId: "crwn-db-7618f",
  
//     storageBucket: "crwn-db-7618f.appspot.com",
  
//     messagingSenderId: "544736575845",
  
//     appId: "1:544736575845:web:7cdb283ecad71aa441e18c",
  
//     measurementId: "G-S2E4TTDH04"
  
//   };

//   // name space importing way


//    const app = firebase.initializeApp(config);
//    const auth = firebase.auth();
//    const provider = new firebase.auth.GoogleAuthProvider();
//     provider.setCustomParameters({prompt: 'select_account'})

//     export const signInWithGoogle = () => {
//         try {
          
//          return auth.signInWithPopup(provider);
         
//         } catch (error) {
//             console.log(error);
//         }
        
//        }

//        export default firebase;

//#endregion  NAME SPACE IMPORTING END


//#region MODULE IMPORTING START
//module importing

    import { initializeApp } from 'firebase/app';
    import { getAnalytics } from "firebase/analytics";
    //, collection, getDocs 
    import { getFirestore} from 'firebase/firestore/lite';
    // FacebookAuthProvider, TwitterAuthProvider
    import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

    const config = {

        apiKey: "AIzaSyC8FsbZHzkHN6bFvC89_Nyckkcd_jewMXY",
    
        authDomain: "crwn-db-7618f.firebaseapp.com",
    
        projectId: "crwn-db-7618f",
    
        storageBucket: "crwn-db-7618f.appspot.com",
    
        messagingSenderId: "544736575845",
    
        appId: "1:544736575845:web:7cdb283ecad71aa441e18c",
    
        measurementId: "G-S2E4TTDH04"
    
    };
            
   // initializing the firebase
     const app =  initializeApp(config);
     const analytics = getAnalytics(app);
    console.log(analytics);
    const provider = new GoogleAuthProvider(); 
    // const providerf = new FacebookAuthProvider(); 
    // const providert = new TwitterAuthProvider(); 

    export const auth = getAuth();
    export const firestore = getFirestore();
     
     export const signInWithGoogle = () => signInWithPopup(auth, provider )

//#endregion MODULE IMPORTING END


  
