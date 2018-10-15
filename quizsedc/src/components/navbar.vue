<template>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">MMDB</router-link>
    </div>
    <ul class="nav navbar-nav">
        <router-link v-for="item in navItems" :key="item.name" class="navbar-brand" :to="item.path">{{item.name}}</router-link>
    </ul>
    <form class="navbar-form navbar-left" action="/action_page.php">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search">
      </div>
      <button class="btn btn-info">Search</button>
    </form>
    <ul class="nav navbar-nav navbar-right">
      <!-- <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li> -->
      <!-- <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li> -->
      <li><router-link to="/signup"><span class="glyphicon glyphicon-user"></span>Sign Up</router-link></li>
      <li><router-link to="/login"><span class="glyphicon glyphicon-log-in"></span>Login</router-link></li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
data(){
    return {
        navItems : [ 
            { path : '/about',name : 'About'},
            { path : '/adminpanel',name : 'AdminPanel'},
        ],

    }
}
}
</script>

<style scoped>

</style>
