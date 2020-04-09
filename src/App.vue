<template>
  <v-app>
    <v-content>
      <Header />
      <router-view></router-view>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";

export default {
  name: "App",

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
