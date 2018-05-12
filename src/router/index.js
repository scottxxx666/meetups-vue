import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Meetup from '@/components/Meetup';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/meetup',
      name: 'Meetup',
      component: Meetup,
    },
  ],
});
