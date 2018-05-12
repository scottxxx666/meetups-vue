<template>
  <div>
    <div>Meetup</div>
    <h3>
      <router-link to="/">回首頁</router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Meetup',
  data() {
    return {
      msg: 'TTTTTTTTTTTest',
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
