<template>
  <TheHeader />
  <Featured />
  <ShortenLinkAPI />
  <About />
  <Boost />
  <TheFooter />
</template>

<script>
import TheHeaderVue from "./components/TheHeader.vue";
import FeaturedVue from "./components/Featured.vue";
import ShortenLinkAPIvue from "./components/ShortenLinkAPI.vue";
import AboutVue from "./components/About.vue";
import BoostVue from "./components/Boost.vue";
import TheFooterVue from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader: TheHeaderVue,
    Featured: FeaturedVue,
    ShortenLinkAPI: ShortenLinkAPIvue,
    About: AboutVue,
    Boost: BoostVue,
    TheFooter: TheFooterVue,
  },
};
</script>

<style lang="scss">
@use 'assets/scss/styles' as *;

#app {
  font-family: $font_primary;
  background-color: $app_bg_color;
}
</style>
