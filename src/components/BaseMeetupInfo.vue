<template>
  <v-card to="/meetup">
    <v-card-title>
      <span class="title">{{ meetup.name }}</span>
    </v-card-title>
    <v-card-text>
      <div>
        日期：{{ meetup.date }}
      </div>
      <div>
        地點：{{ meetup.location }}
      </div>
      <div>
        價錢：
        <span v-if="meetup.normalPrice !== 0">${{ meetup.normalPrice }}</span>
        <span v-if="meetup.normalPrice === 0">免費</span>
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
          v-for="target in meetup.targets"
          :key=target
          color="info"
          small
          outline
          class="ml-0"
          to="/meetups"
          active-class="tab-link-active"
        >
          {{ target }}
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
      msg: '',
      data() {
        return {
        };
      },
    };
  },
};
</script>
