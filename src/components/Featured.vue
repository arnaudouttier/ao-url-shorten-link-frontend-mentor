<template>
  <section class="featured">
    <div class="featured-inner">
      <div class="featured-main">
        <h2 class="featured-title">More than just shorter links</h2>
        <p class="featured-content">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button class="btn btn-primary rounded btn-featured">
          Get Started
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Featured",
};
</script>

<style lang="scss" scoped>
.featured {
  display: grid;
  place-items: center;
  margin-bottom: 80px;
  background-image: url(images/featured/illustration-working.svg);
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -160px;
    left: 0;
    right: 0;
    height: 120px;
    background-color: #fff;
    z-index: 10;
  }
}

.featured-inner {
  width: $width_inner;
  padding-top: clamp(250px,
      calc(15.625rem + ((1vw - 3.75px) * 64.8298)),
      650px);
  /* 375 to 992px */
}

.featured-main {
  text-align: center;

  .featured-title {
    color: $featured_title_color;
    font-size: clamp(2.3rem,
        calc(2.3rem + ((1vw - 0.234375rem) * 2.554)),
        4rem);
    /* 2.3rem (375px) to 4rem (1440px) */
    line-height: 1;
  }

  .featured-content {
    color: $featured_text_color;
  }
}

@media (min-width: 992px) {
  .featured {
    background-position: right center;
    padding-block: 90px;
  }

  .featured-inner {
    padding: 0;
  }

  .featured-main {
    max-width: 45%;
    text-align: left;
  }

  .featured-title {
    line-height: 1.2;
    margin-bottom: 10px;
  }

  .featured-content {
    margin-bottom: 28px;
  }
}
</style>