<template>
  <v-layout
    column
    wrap
    class="my-1"
    align-center
  >
    <v-flex xs12 md4 class="my-3">
      <div class="text-xs-center">
        <h2 class="headline">建立新 Meetup</h2>
      </div>
    </v-flex>
    <v-container>
      <v-layout wrap justify-center>
        <v-flex
          xs12
          md8
        >
          <v-card>
            <v-card-text>
              <v-form lazy-validation class="px-5 py-3">
                <v-text-field
                  v-model="name"
                  label="名稱"
                  :error-messages="nameErrors"
                  :counter="64"
                  @input="$v.name.$touch()"
                  required
                ></v-text-field>
                <v-combobox
                  v-model="organization"
                  :items="organizationSuggestions"
                  label="主辦單位"
                  @input="$v.organization.$touch()"
                  :error-messages="organizationErrors"
                  chips
                  hide-selected
                ></v-combobox>
                <v-select
                  :items="locations"
                  label="地點"
                  v-model="location"
                  :error-messages="locationErrors"
                  required
                ></v-select>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md5
                    mr-2
                  >
                    <v-dialog
                      ref="startdateDialog"
                      lazy
                      full-width
                      width="290px"
                    >
                      <v-text-field
                        v-model="startDate"
                        label="開始日期"
                        slot="activator"
                        :error-messages="startdateErrors"
                        show-current
                        required
                        readonly
                      ></v-text-field>
                      <v-date-picker
                        v-model="startDate"
                        @input="$refs.startdateDialog.save(startDate)"
                        scrollable
                        no-title
                      >
                        <v-spacer></v-spacer>
                      </v-date-picker>
                    </v-dialog>
                  </v-flex>
                  <v-flex
                    xs12
                    md5
                    mr-2
                  >
                    <v-dialog
                      ref="starttimeDialog"
                      lazy
                      full-width
                      width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="startTime"
                        label="開始時間"
                        :error-messages="starttimeErrors"
                        required
                        readonly
                      ></v-text-field>
                      <v-time-picker
                        v-model="startTime"
                        @input="$refs.starttimeDialog.save(startTime)"
                      >
                        <v-spacer></v-spacer>
                      </v-time-picker>
                    </v-dialog>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md5
                    mr-2
                  >
                    <v-dialog
                      ref="enddateDialog"
                      lazy
                      full-width
                      width="290px"
                    >
                      <v-text-field
                        v-model="endDate"
                        label="結束日期"
                        slot="activator"
                        show-current
                        :error-messages="enddateErrors"
                        required
                        readonly
                      ></v-text-field>
                      <v-date-picker
                        v-model="endDate"
                        @input="$refs.enddateDialog.save(endDate)"
                        scrollable
                        no-title
                      >
                        <v-spacer></v-spacer>
                      </v-date-picker>
                    </v-dialog>
                  </v-flex>
                  <v-flex
                    xs12
                    md5
                    mr-2
                  >
                    <v-dialog
                      ref="endtimeDialog"
                      lazy
                      full-width
                      width="290px"
                    >
                      <v-text-field
                        slot="activator"
                        v-model="endTime"
                        label="結束時間"
                        :error-messages="endtimeErrors"
                        required
                        readonly
                      ></v-text-field>
                      <v-time-picker
                        v-model="endTime"
                        @input="$refs.endtimeDialog.save(endTime)"
                      >
                        <v-spacer></v-spacer>
                      </v-time-picker>
                    </v-dialog>
                  </v-flex>
                </v-layout>
                <v-text-field
                  v-model="normalPrice"
                  label="一般價錢"
                  required
                ></v-text-field>
                <v-combobox
                  v-model="tags"
                  :items="tagSuggestions"
                  label="Tags"
                  @input="$v.tags.$touch()"
                  :error-messages="tagsErrors"
                  multiple
                  chips
                  hide-selected
                  counter="6"
                ></v-combobox>
                <v-select
                  :items="levels"
                  v-model="level"
                  label="等級"
                  :error-messages="levelErrors"
                  required
                ></v-select>
                <v-btn
                  @click="submit"
                >
                  創立 Meetup
                </v-btn>
              </v-form>
            </v-card-text>
        </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <h3>
      <router-link to="/">回首頁</router-link>
    </h3>
  </v-layout>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength } from 'vuelidate/lib/validators';
// import { MEETUP_WITH_REVIEWS } from '../constants/graphql';

export default {
  mixins: [validationMixin],
  name: 'MeetupCreate',
  props: [],
  data() {
    return {
      name: null,
      organization: null,
      location: null,
      locations: [
        '台北市',
        '新北市',
      ],
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
      normalPrice: null,
      tags: [],
      level: null,
      levels: [
        '新手',
        '中級',
        '專家',
      ],
      organizationSuggestions: [
        'Test',
      ],
      tagSuggestions: [
        'Tag1',
        'tag2',
        '是唷',
        '市 asd',
      ],
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      if (!this.$v.name.required) errors.push('請輸入名稱');
      if (!this.$v.name.maxLength) errors.push('名稱最多 64 個字唷');
      return errors;
    },
    organizationErrors() {
      const errors = [];
      if (!this.$v.organization.$dirty) return errors;
      if (!this.$v.organization.required) errors.push('請輸入主辦單位名稱');
      if (!this.$v.organization.maxLength) errors.push('名稱最多 32 個字唷');
      return errors;
    },
    locationErrors() {
      const errors = [];
      if (!this.$v.location.$dirty) return errors;
      if (!this.$v.location.required) errors.push('請選擇地點');
      return errors;
    },
    startdateErrors() {
      const errors = [];
      if (!this.$v.startDate.$dirty) return errors;
      if (!this.$v.startDate.required) errors.push('請選擇開始日期');
      return errors;
    },
    starttimeErrors() {
      const errors = [];
      if (!this.$v.startTime.$dirty) return errors;
      if (!this.$v.startTime.required) errors.push('請選擇開始時間');
      return errors;
    },
    enddateErrors() {
      const errors = [];
      if (!this.$v.endDate.$dirty) return errors;
      if (!this.$v.endDate.required) errors.push('請選擇結束日期');
      return errors;
    },
    endtimeErrors() {
      const errors = [];
      if (!this.$v.endTime.$dirty) return errors;
      if (!this.$v.endTime.required) errors.push('請選擇結束時間');
      return errors;
    },
    tagsErrors() {
      const errors = [];
      if (!this.$v.tags.$dirty) return errors;
      if (!this.$v.tags.required) errors.push('請輸入 tag');
      if (!this.$v.tags.maxLength) errors.push('最多 6 個 tag 唷');
      let maxLengthValid = true;
      Object.keys(this.$v.tags.$each.$iter).forEach((key) => {
        maxLengthValid = maxLengthValid && this.$v.tags.$each.$iter[key].maxLength;
      });
      if (!maxLengthValid) errors.push('一個 tag 最多 32 個字唷');
      return errors;
    },
    levelErrors() {
      const errors = [];
      if (!this.$v.level.$dirty) return errors;
      if (!this.$v.level.required) errors.push('請選擇等級');
      return errors;
    },
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(64),
    },
    organization: {
      required,
      maxLength: maxLength(32),
    },
    location: {
      required,
    },
    startDate: {
      required,
    },
    startTime: {
      required,
    },
    endDate: {
      required,
    },
    endTime: {
      required,
    },
    tags: {
      required,
      maxLength: maxLength(6),
      $each: {
        maxLength: maxLength(32),
      },
    },
    level: {
      required,
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
