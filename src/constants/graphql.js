import gql from 'graphql-tag';

export const MEETUP_WITH_REVIEWS = gql`query MeetupAndReviews($id: ID!, $first: Int!, $after: ID) {
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
  }`;
