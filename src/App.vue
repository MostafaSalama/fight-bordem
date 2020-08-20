<template>
  <div id="app">
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
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  ul > li {
    padding: 10px;
    margin-left: 10px;
    background-color: #f5efef;
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
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #371CDB;
}
</style>
