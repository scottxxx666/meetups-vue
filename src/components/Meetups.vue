<template>

  <div class="hello">
    <h1>活動清單</h1>
    <table>
      <tr>
        <td>ID</td>
        <td>活動名稱</td>
        <td>推薦分數</td>
        <td>適合對象</td>
        <td>評分人數</td>
        <td>連結</td>
      </tr>
      <tr v-for="meetup in meetups" :key=meetup.id>
        <td>{{ meetup }}</td>
        <td>Laravel Conf</td>
        <td>1.2</td>
        <td>初學者</td>
        <td>87 人</td>
        <td>
          <router-link to="/meetup">查看評論</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: '',
      meetups: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
    width:80%;
    margin: 0 10px;
}
</style>
