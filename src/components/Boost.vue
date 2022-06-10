<template>
  <section class="boost">
    <div class="boost-inner">
      <h3>Boost your link today</h3>
      <button class="btn btn-primary rounded">Get started</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Boost",
};
</script>

<style lang="scss" scoped>

.boost {
  min-height: 300px;
  background-image: url(images/boost/bg-boost-mobile.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $boost_bg_color;
  display: grid;
  place-content: center;
}

.boost-inner {
  width: $width_inner;
  text-align: center;
  color: #fff;

  h3 {
    font-size: clamp(30px, calc(1.875rem + ((1vw - 3.75px) * 0.939)), 40px);
    margin-bottom: 10px;
  }
}

@media (min-width: 992px) {
  .boost {
    background-image: url(images/boost/bg-boost-desktop.svg);
  }
}
</style>