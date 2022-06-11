<template>
  <nav class="site-navigation" :class="{ active: activeNav }">
    <div class="navigation-main">
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </div>
    <div class="navigation-footer">
      <ul>
        <li>Login</li>
        <li>
          <button class="btn btn-primary rounded">Sign up</button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TheNavigation',
  props: {
    activeNav: Boolean
  }
}
</script>

<style lang="scss" >

.site-navigation {
  padding: 30px;
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  text-align: center;
  transition: transform 0.4s ease;
  background-color: $nav_bg_color_mobile;
  color: $nav_text_color_mobile;
  font-weight: 700;
  border-radius: 10px;
  z-index: 999;

  &.active {
    transform: translate(0, 125%);
  }

  li {
    margin-bottom: 30px;
  }
}

.navigation-main {
  border-bottom: 1px solid grey;
  margin-bottom: 30px;
}

@media (min-width: 992px) {
  .nav-icon {
    display: none !important;
  }

  .site-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: max-content;
    left: 160px;
    top: 40px;
    background-color: transparent;
    color: $nav_text_color;
    padding: 0;
  }

  .navigation-main,
  .navigation-footer {
    margin: 0;

    ul {
      display: flex;
      column-gap: 30px;
      margin: 0;

      li {
        margin: 0;
        transition: color 0.4s ease;

        &:hover {
          color: $nav_text_color_hover;
        }
      }
    }
  }

  .navigation-main {
    border-bottom: 0;
  }

  .navigation-footer {
    ul {
      align-items: center;
    }
  }
}
</style>
