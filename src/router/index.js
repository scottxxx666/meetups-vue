import Vue from 'vue';
import Router from 'vue-router';
import Vuetify from 'vuetify';
import Home from '@/components/Home';
import Meetups from '@/components/Meetups';
import Meetup from '@/components/Meetup';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader

// Helpers
// import colors from 'vuetify/es5/util/colors';

Vue.use(Router);
Vue.use(Vuetify, {
  theme: {
    primary: '#33333D',
  },
});

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups,
    },
    {
      path: '/meetup/:id',
      name: 'Meetup',
      component: Meetup,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
