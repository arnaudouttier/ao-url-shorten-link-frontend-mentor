<template>
  <header id="header">
    <div class="header-inner">
      <img src="images/header/logo.svg" alt="site logo" class="site-logo" />
      <div @click="toggleNav" class="nav-icon">
        <button class="hamburger-icon"></button>
      </div>
      <TheNavigation :activeNav="isNavActive" />
    </div>
  </header>
</template>

<script>
import TheNavigationVue from "./TheNavigation.vue";

export default {
  name: "TheHeader",
  components: {
    TheNavigation: TheNavigationVue,
  },
  data() {
    return {
      isNavActive: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavActive = !this.isNavActive;
    },
  },
};
</script>

<style lang="scss" scoped >

#header {
  display: grid;
  place-content: center;
}

.header-inner {
  width: $width_inner;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: top;
  padding-block: clamp(
    20px,
    calc(1.25rem + ((1vw - 3.75px) * 4.8622)),
    50px
  ); /* 375px to 992px */
}

.nav-icon {
  width: 50px;
  height: 25px;
  display: flex;
  cursor: pointer;
  justify-content: flex-end;
  align-items: center;
}

.hamburger-icon {
  @include hamburger-icon(25px, 3px, grey);
}

@media (min-width: 992px) {
  #header {
    margin-bottom: 50px;
  }
}
</style>