<template>
  <div id="app">
    <Header />
    <nav>
      <router-view />
    </nav>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/style/style.css";
</style>
