import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Quiz from '../components/Quiz.vue';
import Contact from '../components/Contact.vue';

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
      path : '/Quiz',
      name : 'Quiz',
      component : Quiz
    },
    {
      path : '/Contact',
      name : 'Contact',
      component : Contact
    },

  ]
})
