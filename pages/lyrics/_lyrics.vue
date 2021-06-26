<template>
  <main>
    <section v-if="lyrics">
      <article>
        <h2 class="title">Lyrics / {{ album.title }}</h2>
        <h1 class="text-logo">{{ lyrics.title }}</h1>
        <div class="flex">
          <div class="w-1/12 mt-10">
            <router-back class="block" />
          </div>
          <div class="w-11/12 mt-1 text-content">
            <nuxt-content :document="lyrics" />
          </div>
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
