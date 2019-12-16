<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/test1">Test1</router-link>
      <router-link to="/test2">Test2</router-link>
      </div>
    <router-view />
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:700&display=swap');

#app {
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #111;
  height: 100vh;
  position: relative;
}

#nav {
 
  padding: 30px;
  position: absolute;
  bottom: 10vh;
  left: 2vw;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 3px 0;
  margin: 10px 0;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
