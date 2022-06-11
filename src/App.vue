<template>
  <TheHeader />
  <TheFeatured />
  <ShortenLinkAPI />
  <TheAbout />
  <TheBoost />
  <TheFooter />
</template>

<script>
import TheHeaderVue from './components/TheHeader.vue'
import FeaturedVue from './components/TheFeatured.vue'
import ShortenLinkAPIvue from './components/ShortenLinkAPI.vue'
import AboutVue from './components/TheAbout.vue'
import BoostVue from './components/TheBoost.vue'
import TheFooterVue from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader: TheHeaderVue,
    TheFeatured: FeaturedVue,
    ShortenLinkAPI: ShortenLinkAPIvue,
    TheAbout: AboutVue,
    TheBoost: BoostVue,
    TheFooter: TheFooterVue
  }
}
</script>

<style lang="scss">

#app {
  font-family: $font_primary;
  background-color: $app_bg_color;
}
</style>
