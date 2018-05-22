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
      path: '/meetup',
      name: 'Meetup',
      component: Meetup,
    },
  ],
});
