module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
                  @use "@/assets/scss/_styles.scss" as *;
                `
        }
      }
    }
  }