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
export default {
  name: 'Home',
  data() {
    return {
      msg: '',
      meetups: [
        {
          id: 1,
          name: 'DevOps Day',
          date: '2018/07/30 09:00',
          location: '台北',
          tags: ['DevOps'],
          rating: 4.5,
          rating_count: 2,
          targets: ['新手'],
        },
        {
          id: 2,
          name: '台灣資安大會',
          date: '2018/07/30 09:00',
          location: '台北',
          tags: ['資安', 'Security'],
          rating: 4.87,
          rating_count: 200,
          targets: ['專家'],
        },
        {
          id: 3,
          name: 'Modern Web',
          date: '2018/07/30 09:00',
          location: '台北',
          tags: ['Frontend', 'Backend'],
          rating: 4,
          rating_count: 1,
          targets: ['新手', '專家'],
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
