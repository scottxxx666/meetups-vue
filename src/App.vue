<template>
  <div id="app">
    <v-app light>
      <v-toolbar
        app
        dark
        scroll-off-screen
        scroll-threshold=10
      >
        <v-toolbar-title v-text="title" color="grey darken-3"></v-toolbar-title>
      </v-toolbar>
      <div
        id="aaa"
      >
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      </div>
      <v-footer app></v-footer>
    </v-app>
  </div>
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

<style>

</style>
