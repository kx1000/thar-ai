<template>
  <main>
    <section v-if="lyrics">
      <article>
        <h2 class="title">Lyrics / {{ album.title }}</h2>
        <div class="md:flex">
          <div class="md:flex-shrink-0">
            <router-back class="block mr-3" />
          </div>
          <div>
            <h1 class="text-logo mt-1">
              {{ lyrics.title }}
            </h1>
          </div>
        </div>
        <div class="text-content">
          <nuxt-content :document="lyrics" />
        </div>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.lyrics.title + ' / ' + this.album.title + ' ∙ THAR AI',
    }
  },
  async asyncData({ $content, params, error }) {
    let lyrics;
    let album;
    try {
      lyrics = await $content("lyrics", params.lyrics).fetch();
      album = (await $content("discography").where({ slug: lyrics.album }).fetch())[0];
    } catch (e) {
      error({ message: "Lyrics not found" });
    }
    return { lyrics, album };
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    }
  }
}
</script>
