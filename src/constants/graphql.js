import gql from 'graphql-tag';

export const MEETUP_AND_REVIEWS = gql`query MeetupAndReviews($id: ID!, $first: Int!, $after: ID) {
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

export const HOT_MEETUPS = gql`query hotMeetups {
  hotMeetups {
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
}`;

export const MEETUPS = gql`query meetups {
  meetups {
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
}`;

export const ORGANIZATIONS = gql`query organizations {
  organizations {
    id
    name
  }
}`;

export const TAGS = gql`query tags {
  tags
}`;
