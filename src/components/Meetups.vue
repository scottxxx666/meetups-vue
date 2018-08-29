<template>
  <div class="meetups px-2 py-2">
    <v-layout
      column
      wrap
      class="my-1"
      align-center
    >
      <v-flex xs12 md4 class="my-3">
        <div class="text-xs-center">
          <h2 class="headline">搜尋結果</h2>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center>
      <v-flex xs12 md4 px-2 my-1 v-for="meetup in meetups" :key=meetup.id>
        <base-meetup-card v-bind:meetup="meetup"></base-meetup-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { MEETUPS } from '../constants/graphql';

export default {
  name: 'Home',
  data() {
    return {
      msg: '',
      meetups: [],
    };
  },
  apollo: {
    meetups: {
      query: MEETUPS,
    },
  },
};
</script>

<style scoped>
</style>
