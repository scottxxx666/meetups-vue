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
import gql from 'graphql-tag';

export default {
  name: 'Meetup',
  data() {
    return {
    };
  },
  apollo: {
    meetup: {
      query: gql`query ($id: ID!) {
        meetup(id: $id) {
          id
          name
          startTime
          endTime
          rating
          ratingCount
          normalPrice
          createdAt
          updatedAt
          level
          location
          tags
        }
        review(id: $id) {
          member {
            name
          }
          desc
          updatedAt
          rating
        }
      }`,
      variables: {
        id: '1',
      },
      result(ApolloQueryResult) {
        this.reviews = [ApolloQueryResult.data.review];
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
