<template>
  <main>
    <section v-if="filteredAlbums" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Lyrics</h1>
      <div v-for="album in filteredAlbums">
        <h1 class="text-logo mb-6 mt-10">{{ album.title }}</h1>
        <p v-for="lyric in album.lirycs">
          <nuxt-link :to="`lyrics/${lyric.slug}`" class="text-content no-underline font-semibold lyric-link">
            <span class="text-red-700 mr-4">{{ formatLyricNumber(lyric.number) }}.</span> {{ lyric.title }}
          </nuxt-link>
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    formatLyricNumber(number) {
      return number < 10 ? '0' + number : number;
    }
  },
  computed: {
    filteredAlbums() {
      return this.albums.filter(album => {
        return album.lirycs.length > 0;
      });
    }
  },
  async asyncData({ $content, error }) {
    let albums;
    try {
      albums = await $content('discography')
          .sortBy('releaseDt', 'desc')
          .fetch();

      await albums.forEach(async album => {
        album.lirycs = await $content("lyrics")
            .where({ album: album.slug })
            .sortBy('number')
            .fetch();
      });
    } catch (e) {
      error({ message: "Lyrics not found" });
    }
    return { albums };
  },
}
</script>

<style scoped>
.lyric-link {
  text-decoration: none;
  margin-bottom: 20px;
  display: block;
}
</style>