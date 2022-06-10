<template>
  <section class="sh">
    <div class="sh-before"></div>
    <div class="sh-inner">
      <div class="sh-input-group">
        <input
          class="sh-input"
          :class="{ warning: !isValidUrl }"
          @keyup.enter="submitUserUrl"
          v-model="originalUrl"
          type="url"
          placeholder="Shorten a link here..."
          required
        />
        <span v-if="!isValidUrl">Please add a valid link</span>
      </div>

      <button
        class="btn btn-primary full-width btn-submit"
        @click="submitUserUrl"
      >
        Shorten it
      </button>
    </div>
    <div class="sh-inner-result">
      <ul class="sh-list">
        <li v-for="userUrl in userUrls" class="sh-list-item" :key="userUrl.id">
          <div class="sh-list-item-header">
            <h4 class="original-url">{{ userUrl.UrlOriginal }}</h4>
          </div>
          <div class="sh-list-item-main">
            <h4 class="shorten-url copy-url">
              {{ userUrl.shortenUrl }}
            </h4>
            <button
              @click="copyShortenUrl(userUrl.id, $event)"
              class="btn btn-primary full-width btn-copy"
            >
              Copy
            </button>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ShortenLinkAPI",
  data() {
    return {
      originalUrl: "",
      shortenUrl: "",
      userUrls: [],
      isValidUrl: true,
      urlCopied: "",
      isCopied: true,
      regex: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    };
  },
  methods: {
    async submitUserUrl() {
      this.isValidUrl = this.regex.test(this.originalUrl);

      if (this.isValidUrl) {
        try {
          const response = await axios.get(
            `https://api.shrtco.de/v2/shorten?url=${this.originalUrl}`
          );
          this.shortenUrl = response.data.result.full_short_link;
        } catch (e) {
          this.errors.push(e);
        }

        const newUserUrl = {
          id: this.userUrls.length,
          UrlOriginal: this.originalUrl,
          shortenUrl: this.shortenUrl,
        };
        this.userUrls.push(newUserUrl);
      }
      this.originalUrl = "";
      this.shortenUrl = "";
    },

    copyShortenUrl(listIndex, event) {
      this.urlCopied = this.userUrls[listIndex].shortenUrl;
      navigator.clipboard.writeText(this.urlCopied);

      if (this.isCopied) {
        event.target.textContent = "Copied!";
        event.target.classList.add("activeCopy");
      } else {
        event.target.textContent = "Copy";
        event.target.classList.remove("activeCopy");
      }
      this.isCopied = !this.isCopied;
    },
  },
};
</script>

<style lang="scss" scoped>
.sh {
  display: grid;
  place-items: center;
  padding-bottom: 80px;
  background-color: $sh_bg_color;
}

.sh-inner,
.sh-inner-result {
  width: $width_inner;
  display: flex;
  flex-direction: column;
}

/* sh-inner */

.sh-inner {
  border-radius: 10px;
  background-image: url(images/shorten/bg-shorten-mobile.svg);
  background-color: $sh_inner_bg_color;
  background-position-x: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: clamp(20px, calc(1.25rem + ((1vw - 3.75px) * 3.6364)), 50px);
  /* 375 ro 1200px */
  z-index: 20;

  .sh-input-group {
    position: relative;

    .sh-input {
      &.warning {
        border: 4px solid $sh_color_warning;
      }
    }

    span {
      margin-top: 6px;
      color: $sh_color_warning;
      font-size: 15px;
      font-style: italic;
      display: block;
    }
  }
}

/* sh.list result */

.sh-list {
  li {
    background-color: $sh_list_item_bg_color;
    margin: 20px 0;
    border-radius: 5px;

    .sh-list-item-header {
      border-bottom: 1px solid $sh_border_color;

      .original-url {
        color: $sh_original_url_text_color;
        margin: 0;
        padding: 15px;
        word-break: break-all;
      }
    }

    .sh-list-item-main {
      padding: 15px;

      .shorten-url {
        margin: 0;
        margin-bottom: 15px;
        color: $sh_shorten_url_text_color;
      }

      .btn-copy {
        width: 100%;
        border-radius: 5px;
        min-width: 170px;

        &.activeCopy {
          background-color: $sh_button_copy_bg_color_active;
        }
      }
    }
  }
}

@media (min-width: 992px) {
  .sh {
    padding-bottom: 100px;
    position: relative;
  }

  /* .sh-inner */

  .sh-inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    column-gap: 20px;

    .sh-input-group {
      flex-grow: 2;
    }
  }

  /* .sh-inner-result */

  .sh-inner-result {
    .sh-list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      border-radius: 10px;

      .sh-list-item-header {
        border: 0;
      }

      .sh-list-item-main {
        display: flex;
        align-items: center;
        column-gap: 30px;
        padding: 0;

        .shorten-url {
          margin: 0;
        }
      }
    }
  }
}
</style>
