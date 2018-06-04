<template>
  <v-card class="py-2">
    <v-card-title class="py-2">
      <v-btn
        v-bind:style="{ backgroundColor: randomColor }"
        fab
        small
        dark
        class="elevation-0 subheading"
      >
        匿
      </v-btn>
      <span class="title">{{ review.author }}</span>
    </v-card-title>
    <v-card-text class="pt-1 pl-4">
      <div>
        {{ review.create_date }}
      </div>
      <div>
        評分：{{ review.rating }}
      </div>
      <div>
        {{ review.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'BaseMeetupCard',
  props: ['review'],
  data() {
    return {
      msg: '',
      colors: ['blue', 'red', 'green', 'brown'],
    };
  },
  computed: {
    randomColor: function randomColor() {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
  },
};
</script>
