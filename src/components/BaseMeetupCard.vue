<template>
  <v-card :to="'/meetup/' + meetup.id">
    <v-card-title>
      <span class="title">{{ meetup.name }}</span>
    </v-card-title>
    <v-card-text>
      <div>
        主辦單位：{{ meetup.organization.name }}
      </div>
      <div>
        日期：{{ meetup.startTime }} - {{ meetup.endTime }}
      </div>
      <div>
        地點：{{ meetup.location }}
      </div>
      <div>
        價錢：{{ displayPrice }}
      </div>
      <div>
        <v-btn
          v-for="tag in meetup.tags"
          :key=tag
          color="error"
          small
          outline
          class="ml-0"
          to="/meetups"
          active-class="tab-link-active"
        >
          {{ tag }}
        </v-btn>
      </div>
      <div>
        評分：{{ meetup.rating }}（{{ meetup.ratingCount }} 篇評論）
      </div>
      <div>
        <v-btn
          color="info"
          small
          outline
          class="ml-0"
          to="/meetups"
          active-class="tab-link-active"
        >
          {{ meetup.level }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'BaseMeetupCard',
  props: ['meetup'],
  data() {
    return {
    };
  },
  computed: {
    displayPrice: function displayPrice() {
      if (this.meetup.normalPrice === 0) {
        return '免費';
      }
      return `$${this.meetup.normalPrice}`;
    },
  },
};
</script>
