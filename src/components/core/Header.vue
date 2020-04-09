<template>
  <div>
    <div class="top-header">
      <TopHeader />
    </div>
    <div id="nav" class="shadow">
      <div class="container">
        <nav class="navbar navbar-expand-lg ">
          <!-- <a class="navbar-brand" href="#">Navbar</a> -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-link" to="/appointment"
                  >My Appointment</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link class="nav-link" to="/about">About Us</router-link>
              </li>
              <li class="nav-item active">
                <router-link class="nav-link" to="/contact"
                  >Contact Us</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/core/TopHeader";
export default {
  components: {
    TopHeader
  }
};
</script>

<style lang="scss">
.top-header {
  background: #084971;
  color: #fff;
}
#nav {
  padding: 21px 0;
  background: #ffff;

  a {
    font-weight: bold;
    color: #474747;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
