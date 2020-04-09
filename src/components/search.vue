<template>
  <div>
    <div
      class="card my-3 shadow"
      v-for="center in allMediaCenter"
      :key="center.id"
    >
      <img src="@/assets/img/book-appointment@3x.jpg" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ center.name }}</h5>
        <div class="text-muted">
          <img class="mx-2" src="@/assets/img/address-2.svg" alt />
          <span>{{ center.address }}</span>
        </div>
        <div class="border-top my-3 py-3">
          <h6>Services</h6>
          <div class="row">
            <div
              class="col-md-4 text-center"
              v-for="service in center.services"
              :key="service"
            >
              <img
                v-if="service === 'live virtual consultation'"
                class="my-3"
                src="@/assets/img/services.svg"
                alt
              />
              <img
                v-if="service === 'body vitals measurments'"
                class="my-3"
                src="@/assets/img/body-vitals.svg"
                alt
              />
              <img
                v-if="service === 'composition measures'"
                class="my-3"
                src="@/assets/img/composition-measurments.svg"
                alt
              />
              <p class="text-capitalize">{{ service }}</p>
            </div>
          </div>
        </div>
        <div class="border-top my-3 py-3">
          <h6>Location</h6>
          <img
            style="width:100%; height:100%"
            src="@/assets/img/location@3x.jpg"
            alt
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({}),
  // Method to get actions from modules
  methods: {
    ...mapActions(["loadMediaCenter"])
  },
  //  Computed to get Getters  from modules
  computed: mapGetters(["allMediaCenter"]),
  // Create to run the Action
  created() {
    this.loadMediaCenter();
  }
};
</script>

<style></style>
