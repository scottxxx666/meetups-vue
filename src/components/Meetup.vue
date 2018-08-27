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
        <v-flex v-if="reviews.length == 0">
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
import gql from 'graphql-tag';

export default {
  name: 'Meetup',
  data() {
    return {
      reviews: [],
      endCursor: null,
    };
  },
  methods: {
    showMore() {
      if (this.endCursor === null) {
        return false;
      }
      this.$apollo.queries.meetup.fetchMore({
        variables: {
          id: '1',
          first: 1,
          after: this.endCursor,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const result = fetchMoreResult;
          result.reviewsConnection.edges = [
            ...previousResult.reviewsConnection.edges,
            ...fetchMoreResult.reviewsConnection.edges,
          ];
          return result;
        },
      });
      return true;
    },
  },
  apollo: {
    meetup: {
      query: gql`query MeetupAndReviews($id: ID!, $first: Int!, $after: ID) {
        meetup(id: $id) {
          id
          name
          organization {
            name
          }
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
        reviewsConnection(meetupId: $id, first: $first, after: $after) {
          totalCount
          edges {
            node {
              id
              desc
              member{
                name
              }
              desc
              updatedAt
              rating
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }`,
      variables: {
        id: '1',
        first: 1,
      },
      result(ApolloQueryResult) {
        this.reviews = ApolloQueryResult.data.reviewsConnection.edges.map(item => item.node);
        this.endCursor = ApolloQueryResult.data.reviewsConnection.pageInfo.endCursor;
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
