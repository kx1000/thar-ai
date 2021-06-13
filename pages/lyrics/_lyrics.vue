<template>
  <main>
    <section v-if="lyrics">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article>
        <h2 class="title">Lyrics / {{ album.title }}</h2>
        <h1 class="text-logo">{{ lyrics.title }}</h1>
        <nuxt-content :document="lyrics" />
        under content
      </article>
    </section>
  </main>
</template>

<script>
export default {
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
