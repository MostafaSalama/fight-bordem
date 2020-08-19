<template>
  <div id="app">
    <div id="nav">
      <h1>Here we will display the app</h1>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name : 'App',
    created() {
      this.$store.dispatch('getActivity')
    }
  }
</script>
<style>
  * {
    box-sizing: border-box;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
