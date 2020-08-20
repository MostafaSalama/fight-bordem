<template>
  <div id="app">
    <header>
      <h1>Feeling Tired!! Try Something new now just click the button</h1>
    </header>
    <div id="nav">
      <nav>
        <ul>
          <li>
            <router-link to="/">Activity</router-link>
          </li>
          <li>
            <router-link to="/liked">Liked Activities</router-link>
          </li>
        </ul>
      </nav>
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
  body {
    background-color: #F5F5F5;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  ul > li {
    text-align: center;
    color: #ffffff;
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
  padding: 10px;
  margin-left: 10px;
  background-color: #f5efef;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #371CDB;
}
</style>
