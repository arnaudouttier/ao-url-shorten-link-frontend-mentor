module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
                  @import "@/assets/scss/_styles.scss" ;
                `
        }
      }
    }
  }
