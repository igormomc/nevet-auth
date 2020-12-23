<template>
  <div id="app">
    <!-- <header></header> -->
    <top-header></top-header>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/secret">Secret</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Top-Header";
export default {
  components: {
    "top-header": Header
  },
  data() {
    return {
      blah: "erik"
    };
  }
};
</script>  
