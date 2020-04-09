<template>
  <div>
    <div class="card my-2 shadow" v-for="m in AllAppointment" :key="m.id">
      <div class="card-header">
        <img
          src="@/assets/img/calender-white.svg"
          class="icon-calender"
          alt=""
        />
        <span>{{ m.time }}</span> <span>{{ m.day }}</span>
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <div class="row">
            <div class="col-md-3">
              <img width="100" src="@/assets/img/trudoc@2x.png" alt="" />
            </div>
            <div class="col-md-9">
              <h5>
                {{ m.name }}
              </h5>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppointmentCard",
  data: () => ({}),
  // Method to get actions from modules
  methods: {
    ...mapActions(["loadAllAppointment"])
  },
  //  Computed to get Getters  from modules
  computed: mapGetters(["AllAppointment"]),
  // Create to run the Action
  created() {
    this.loadAllAppointment();
  }
};
</script>

<style lang="scss" scoped>
.appointment {
  background: #f4f4f4;
  .card-header {
    background-color: rgba(96, 147, 175, 0.59);
    border-bottom: none;
  }
  .icon-calender {
    line-height: 2;
    padding: 5px;
    margin-top: -4px;
  }
  span {
    color: #646f86;
    font-weight: 500;
  }
}
</style>
