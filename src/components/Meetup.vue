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
        <infinite-loading
          @infinite="showMore"
          :bind:distance="100"
          v-if="hasNextPage"
        >
          <span slot="no-more"></span>
        </infinite-loading>
        <v-flex v-if="reviews.length == 0" class="text-md-center text-xs-center subheading">
          暫時還沒有評論，快點來當第一位吧！
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
import InfiniteLoading from 'vue-infinite-loading';
import { LOADING_COUNT } from '../constants/setting';
import { MEETUP_AND_REVIEWS } from '../constants/graphql';

export default {
  name: 'Meetup',
  props: ['id'],
  data() {
    return {
      reviews: [],
      endCursor: null,
      hasNextPage: false,
    };
  },
  methods: {
    showMore($state) {
      this.$apollo.queries.meetup.fetchMore({
        variables: {
          id: this.id,
          first: LOADING_COUNT,
          after: this.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const result = fetchMoreResult;
          result.reviewsConnection.edges = [
            ...previousResult.reviewsConnection.edges,
            ...fetchMoreResult.reviewsConnection.edges,
          ];

          if (result.reviewsConnection.pageInfo.hasNextPage) {
            $state.loaded();
            return result;
          }

          $state.complete();
          return result;
        },
      });
      return true;
    },
  },
  apollo: {
    meetup: {
      query: MEETUP_AND_REVIEWS,
      variables() {
        return {
          id: this.id,
          first: LOADING_COUNT,
        };
      },
      result(ApolloQueryResult) {
        this.reviews = ApolloQueryResult.data.reviewsConnection.edges.map(item => item.node);
        this.endCursor = ApolloQueryResult.data.reviewsConnection.pageInfo.endCursor;
        this.hasNextPage = ApolloQueryResult.data.reviewsConnection.pageInfo.hasNextPage;
      },
      error() {
        this.$router.push('/');
      },
    },
  },
  components: {
    InfiniteLoading,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
