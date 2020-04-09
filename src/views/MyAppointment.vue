<template>
  <div class="appointment">
    <!-- breadcrumbs  -->
    <div class="jumbotron jumbotron-fluid py-5">
      <div class="container">
        <h4 class="display-2">My Appointment</h4>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <!-- Form -->
          <appointmentForm />
        </div>
        <div class="col-md-8">
          <!-- My Appointment -->
          <AppointmentCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppointmentForm from "@/components/appointmentForm.vue";
import AppointmentCard from "@/components/appointmentCard.vue";

export default {
  name: "Appointment",
  components: {
    AppointmentForm,
    AppointmentCard
  },
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.appointment {
  background: #f4f4f4;
}
</style>
