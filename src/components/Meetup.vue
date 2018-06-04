<template>
  <v-layout
    column
    wrap
    class="my-1"
    align-center
  >
    <v-container>
      <v-layout wrap justify-center>
        <v-flex
          xs12
          md8
        >
          <base-meetup-card v-bind:meetup="meetup"></base-meetup-card>
        </v-flex>
      </v-layout>
      <v-layout
        wrap
        justify-center
      >
        <v-flex
          xs12
          md12
          class="mt-4"
        >
          <div class="text-xs-center">
            <h2 class="headline">評論</h2>
          </div>
        </v-flex>
        <v-flex xs12 md6>
        <v-container class="" px-0>
          <v-layout
        wrap
        justify-center
        column
      >
        <v-flex my-1 v-for="review in reviews" :key=review.id>
          <base-meetup-review v-bind:review="review"></base-meetup-review>
        </v-flex>
        </v-layout>
        </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <h3>
      <router-link to="/">回首頁</router-link>
    </h3>
  </v-layout>
</template>

<script>
export default {
  name: 'Meetup',
  data() {
    return {
      msg: 'TTTTTTTTTTTest',
      meetup: {
        id: 1,
        name: 'DevOps Day',
        date: '2018/07/30 09:00',
        location: '台北',
        price: 12,
        tags: ['DevOps'],
        rating: 4.5,
        rating_count: 2,
        targets: ['新手'],
      },
      reviews: [
        {
          id: 1,
          author: '匿名',
          create_date: '2018/07/30',
          rating: 4,
          description: '太神啦～～～',
        },
        {
          id: 2,
          author: 'Scott',
          create_date: '2018/07/30',
          rating: 4,
          description: '好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒好棒棒',
        },
        {
          id: 3,
          author: '匿名',
          create_date: '2018/07/30',
          rating: 4,
          description: '????',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
