<template>
<div class="about">
    <h1>This is an about page</h1>
    {{ this.userData.email }}
    <div class="info">
    </div>
</div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
var userData = "";

export default {
  
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          console.log(user);
          this.userData = user;
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    }
  },
  data() {
    return {
      loggedIn: false,
      "userData": userData
    };
  }
  
};
</script>

<style>
div {
  color: inherit;
}
</style>
