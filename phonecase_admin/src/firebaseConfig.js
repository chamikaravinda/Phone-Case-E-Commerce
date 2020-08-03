import firebase from "firebase";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBi2E4XtTKurP0vvBM3gQ9dTFxLagL4bxM",
  authDomain: "phone-e-commerce-api.firebaseapp.com",
  databaseURL: "https://phone-e-commerce-api.firebaseio.com",
  storageBucket: "phone-e-commerce-api.appspot.com",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
