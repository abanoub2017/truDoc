<template>
  <div class="home">
    <!-- breadcrumbs  -->
    <div class="jumbotron jumbotron-fluid py-5">
      <div class="container">
        <h4 class="display-2">Book an Appointment</h4>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb p-0">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page"> Search Result</li>
          </ol>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <!-- Form -->
          <appointmentForm />
        </div>
        <div class="col-md-8">
          <!-- Search -->
          <Search />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppointmentForm from "@/components/appointmentForm.vue";
import Search from "@/components/search.vue";

export default {
  name: "Home",
  components: {
    AppointmentForm,
    Search
  },
  data: () => ({
  })
};
</script>
<style lang="scss" scoped>
.home {
  background: #f4f4f4;
  .breadcrumb {
    .breadcrumb-item {
      a {
        color: #8f9bb3 !important;
      }
      &.active {
        color: #636a77 !important;
      }
    }
  }
}
</style>
