import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import AdminPanel from '../components/AdminPanel.vue';
import Contact from '../components/Contact.vue';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/',
      name : 'Home',
      component : Home
    },
    {
      path : '/about',
      name : 'About',
      component : About
    },
    {
      path : '/adminpanel',
      name : 'AdminPanel',
      component : AdminPanel
    },
    {
      path : '/Contact',
      name : 'Contact',
      component : Contact
    },
    {
      path : '/login',
      name : 'Login',
      component : Login
    },
    {
      path : '/signup',
      name : 'SignUp',
      component : SignUp
    }

  ],
  mode : 'history',
})
