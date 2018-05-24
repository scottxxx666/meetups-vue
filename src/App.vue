<template>
  <v-app light>
    <v-toolbar
      app
      dark
      scroll-off-screen
      scroll-threshold="50"
    >
      <v-toolbar-title v-text="title" color="grey darken-3" to="/home"></v-toolbar-title>
    </v-toolbar>
    <v-content class="grey lighten-4">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Meetups',
    };
  },
};
</script>
