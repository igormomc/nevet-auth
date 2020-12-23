import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyA3LSpqNdQBBIHL03oVvx1GF32c8voqzIQ",
  authDomain: "thisone-f7a65.firebaseapp.com",
  projectId: "thisone-f7a65",
  storageBucket: "thisone-f7a65.appspot.com",
  messagingSenderId: "214201865664",
  appId: "1:214201865664:web:1d33068a8a408eec54e425"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// app = new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
