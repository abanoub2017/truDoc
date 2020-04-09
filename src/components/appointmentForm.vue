<template>
  <div class="form-appointment shadow">
    <v-row>
      <h4>Make an Appointment</h4>
      <br />
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ text }}
        <v-btn color="blue" text @click="snackbar = false">
          Close
        </v-btn>
      </v-snackbar>
      <v-form
        @submit="formSubmit"
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
      >
        <label class="label"> Booth Name</label>
        <select
          class="custom-select custom-select mb-3"
          v-model="select"
          :rules="[v => !!v || 'Name is required']"
          required
        >
          <option selected disabled value="">Open this select menu</option>
          <option v-for="m in allMediaCenterName" :key="m.id" :value="m.name">
            {{ m.name }}
          </option>
        </select>

        <label class="label">Date</label>
        <v-date-picker
          v-model="picker"
          color="green lighten-1"
          :rules="[v => !!v || 'Data is required']"
          required
        ></v-date-picker>

        <label class="label"> Time</label>
        <v-time-picker
          v-model="pickerTime"
          ampm-in-title
          color="green lighten-1"
          :rules="[v => !!v || 'Time is required']"
          required
        ></v-time-picker>
        <div class="actions-appoint">
          <button
            :disabled="this.select === null ? true : false"
            class="btn btn-primary"
          >
            Book Now
          </button>
        </div>
      </v-form>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    items: [],
    lazy: false,
    select: null,
    picker: new Date().toISOString().substr(0, 10),
    pickerTime: new Date(),
    centers: [],
    snackbar: false,
    text: "Your Appointment is Send",
    timeout: 4000
  }),

  methods: {
    ...mapActions(["loadMediaCenter"]),
    ...mapActions(["loadMediaCenterName"]),
    ...mapActions(["loadNewAppoint"]),
    validate() {
      this.$refs.form.validate();
    },

    formSubmit(e) {
      e.preventDefault();
      this.loadNewAppoint({
        name: this.select,
        day: this.picker,
        time: this.pickerTime
      });
      this.select = null;
      this.snackbar = true;
    }
  },
  //  Computed to get Getters  from modules
  computed: {
    ...mapGetters(["allMediaCenter"]),
    ...mapGetters(["allMediaCenterName"])
  },
  // Create to run the Action
  created() {
    this.loadMediaCenter();
    this.loadMediaCenterName();
  }
};
</script>

<style lang="scss">
.form-appointment {
  background: #fff;
  padding: 20px 38px;
  .label {
    line-height: 2;
    font-weight: bold;
    padding: 6px 0;
  }
  .actions-appoint {
    text-align: center;
    margin: 15px 0;
    button {
      width: 80%;
      padding: 13px 0;
      margin: auto;
      &.btn-primary{
        background-color: #006ba6;
        border: #006ba6;
      }
    }
  }
}
</style>
