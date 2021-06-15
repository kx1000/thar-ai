<template>
  <div>
    <ul v-if="site" class="links">
      <li v-if="site.youtube">
        <a :href="site.youtube" target="_blank">
          <img src="~assets/img/logo/yt_logo.svg" />
        </a>
      </li>
      <li v-if="site.spotify">
        <a :href="site.spotify" target="_blank">
          <img src="~assets/img/logo/spotify-logo.svg" />
        </a>
      </li>
      <li v-if="site.tidal">
        <a :href="site.tidal" target="_blank">
          <img src="~assets/img/logo/tidal_logo.svg" />
        </a>
      </li>
      <li v-if="site.appleMusic">
        <a :href="site.appleMusic" target="_blank">
          <img src="~assets/img/logo/AM_logo.svg" />
        </a>
      </li>
    </ul>
    <div v-if="site">
        <a :href="site.instagram" target="_blank" class="inline-block mr-5">
          <img src="~assets/img/logo/instagram.svg" />
        </a>
        <a :href="site.facebook" target="_blank" class="inline-block ml-5">
          <img src="~assets/img/logo/facebook.svg" />
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Links",
  async asyncData({ $content, error }) {
    let site;
    try {
      site = (await $content("site").fetch());
    } catch (e) {
      error({ message: "Biography not found" });
    }
    return { site };
  },
}
</script>

<style scoped>
.links > li {
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>