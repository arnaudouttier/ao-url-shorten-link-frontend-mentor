<template>
  <section class="about">
    <div class="about-inner">
      <div class="about-intro">
        <h3 class="about-title">Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div class="about-items">
        <div class="about-item">
          <img
            src="images/about/icon-brand-recognition.svg"
            alt="about item images"
            class="about-item-image"
          />
          <h5 class="about-item-title">Brand Recognition</h5>
          <p class="about-item-content">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div class="about-item active-pseudo">
          <img
            src="images/about/icon-detailed-records.svg"
            alt="about item images"
            class="about-item-image"
          />
          <h5 class="about-item-title">Detailed Records</h5>
          <p class="about-item-content">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div class="about-item active-pseudo">
          <img
            src="images/about/icon-fully-customizable.svg"
            alt="about item images"
            class="about-item-image"
          />
          <h5 class="about-item-title">Fully Customizable</h5>
          <p class="about-item-content">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>

.about {
  display: grid;
  place-items: center;
  padding-bottom: 80px;
  text-align: center;
  background-color: $about_bg_color;
}

.about-inner {
  width: $width_inner;
}

.about-intro,
.about-item {
  color: $about_text_color;

  &:not(:last-child) {
    margin-bottom: 100px;
  }
}

.about-title,
.about-item-title {
  color: $about_title_color;
  margin-bottom: 30px;
}

.about-title {
  font-size: clamp(28px, calc(1.75rem + ((1vw - 3.75px) * 0.939)), 38px);
  /* 375px to 1440px */
}

.about-item-title {
  font-size: 20px;
}

.about-item {
  background-color: $about_item_bg_color;
  height: fit-content;
  padding: 30px;
  position: relative;
  border-radius: 5px;

  &:is(.active-pseudo) {
    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, -100%);
      width: 7px;
      height: 100px;
      background-color: $about_item_bg_color_before;
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    padding: 20px;
    background-color: $about_item_bg_color_img;
  }
}

@media (min-width: 992px) {
  .about {
    padding-bottom: 200px;
  }

  .about-intro {
    max-width: 50%;
    margin: 0 auto 60px auto !important;
  }

  .about-items {
    display: flex;
    column-gap: 30px;
    padding: 54px;
  }

  .about-item {
    margin-bottom: 0 !important;
    @include about-item-margin;
    text-align: left;

    &:is(.active-pseudo) {
      &:before {
        left: 0px;
        top: 50%;
        transform: translate(-100%, 0);
        width: 30px;
        height: 7px;
      }
      &:nth-child(3) {
        &:before {
          top: 37%;
        }
      }
    }

    img {
      left: 20%;
    }
  }
}
</style>