import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'


export const initializeLoginInFrameWorker = () => {

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword( email, password)
      .then(res => {
        updateUserName(name)
        return handleResponse(res)  
      })
      // .catch((error) => {
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   console.log(errorCode, errorMessage);
      // });
  }
  const handleResponse =(res)=>{
    const { displayName, email } = res.user;
    const newUserInfo ={ name: displayName, email}
        newUserInfo.error = '';
        newUserInfo.success = true
        return newUserInfo;
  }
  const updateUserName = name => {
    var user = firebase.auth().currentUser;
  
    user.updateProfile({
      displayName: name,
  
    }).then(function () {
      console.log('user name sent successfully')
    }).catch(function (error) {
      console.log(error)
    });
  }


  export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => 
        handleResponse(res)
  
      )
     
  }