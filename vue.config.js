module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
                  @use "@/assets/scss/styles.scss" as  *;
                `
      }
    }
  }
}
