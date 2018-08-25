<template>

  <div id="home-container">
    <section>
        <v-parallax :src="require('@/assets/banner.jpg')" height="490">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <div id="form">
            <h1 class="gray--text mb-2 display-3 text-xs-center">Meetups</h1>
            <div class="subheading mb-3 text-xs-center">參加最適合的活動</div>
              <v-layout row>
              <v-text-field
                placeholder="關鍵字，例如：WEB"
                dark
                single-line
                required
                color="blue-grey lighten-4"
                id="search-input"
              >
              </v-text-field>
              <v-btn
                class="blue lighten-2"
                dark
                large
                to="/meetups"
              >
              <v-icon light>search</v-icon>
            </v-btn>
            </v-layout>
            </div>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">為什麼要用 Meetups ?</h2>
              <span class="subheading">
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">list</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">集合多種活動</div>
                    </v-card-title>
                    <v-card-text>
                      害怕錯過各種有興趣的活動嗎？Meetups 將眾多活動都集合在這裡了，讓您可以輕鬆搜尋各種活動。也歡迎隨時將知道的活動新增到 Meetups．
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">mood</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">評分</div>
                    </v-card-title>
                    <v-card-text>
                      可以看到大家對於各活動留下的心得，再也不用擔心參加到過於艱深或是過於簡單的活動！不用加入會員也可以觀看心得與評分唷．
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">bookmark</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">儲存</div>
                    </v-card-title>
                    <v-card-text>
                      將有興趣的活動或是主辦單位儲存，就能一次全部顯示，不用一直切到不同社團或網站。快點加入免費會員節省自己的時間吧．
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-1"
          align-center
        >
          <v-flex xs12 md4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">熱門活動</h2>
            </div>
          </v-flex>
        </v-layout>
        <v-flex xs12>
        <v-container>
        <v-layout wrap justify-center>
          <v-flex xs12 md4 px-2 my-1 v-for="meetup in hot_meetups" :key=meetup.id>
            <base-meetup-card v-bind:meetup="meetup"></base-meetup-card>
          </v-flex>
        </v-layout>
        </v-container>
        </v-flex>
      </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: '',
      hot_meetups: [
        {
          id: 1,
          name: 'DevOps Day',
          organization: {
            name: 'DevOps Taiwan'
          },
          startTime: '2018/07/30 09:00',
          endTime: '2018/07/30 09:00',
          location: '台北',
          normalPrice: 100,
          tags: ['DevOps'],
          rating: 4.5,
          rating_count: 3,
          level: '新手',
        },
        {
          id: 2,
          name: '台灣資安大會',
          organization: {
            name: 'Someone'
          },
          startTime: '2018/07/30 09:00',
          endTime: '2018/07/30 09:00',
          location: '台北',
          normalPrice: 0,
          tags: ['資安', 'Security'],
          rating: 4.87,
          rating_count: 200,
          level: '專家',
        },
        {
          id: 3,
          name: 'Modern Web',
          organization: {
            name: 'Modern Web'
          },
          startTime: '2018/07/30 09:00',
          endTime: '2018/07/30 09:00',
          location: '台北',
          normalPrice: 300,
          tags: ['Frontend', 'Backend'],
          rating: 4,
          rating_count: 1,
          level: '專家',
        },
      ],
    };
  },
};
</script>

<style>
#home-container{
  margin:-24px;
}
.parallax__content{
  /* background: rgba(84, 110, 122, 0.5); */
  /* #background: rgba(120, 144, 156, 0.5); */
  /* #background: rgba(141, 110, 99, 0.5); */
}
#search-input{
  font-size: 150%;
}
</style>
