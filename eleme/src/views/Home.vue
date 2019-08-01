<template>
  <div class="home">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>