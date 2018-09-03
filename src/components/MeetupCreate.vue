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
              <v-form lazy-validation>
                <v-text-field
                  v-model="name"
                  label="名稱"
                  :error-messages="nameErrors"
                  :counter="64"
                  @input="$v.name.$touch()"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="organization"
                  label="主辦單位"
                  required
                ></v-text-field>
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
                        label="開始時間"
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
                <v-text-field
                  v-model="tags"
                  label="Tags"
                  required
                ></v-text-field>
                <v-select
                  :items="levels"
                  label="Level"
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
      levels: [
        '新手',
        '中級',
        '專家',
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
      if (!this.$v.name.required) errors.push('Name is required.');
      if (!this.$v.name.maxLength) errors.push('Name must be at most 64 characters long');
      return errors;
    },
    locationErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      if (!this.$v.location.required) errors.push('請選擇地點');
      return errors;
    },
    startdateErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      if (!this.$v.location.required) errors.push('請選擇開始日期');
      return errors;
    },
    starttimeErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      if (!this.$v.location.required) errors.push('請選擇開始時間');
      return errors;
    },
  },
  validations: {
    name: {
      required,
      maxLength: maxLength(64),
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
