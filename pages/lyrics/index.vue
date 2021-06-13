<template>
  <main>
    <section v-if="albums" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Lyrics</h1>
      <div v-for="album in albums">
        <h1>album: {{ album.title }}</h1>
        <p v-for="lyric in album.lirycs">
          <nuxt-link
              :to="`lyrics/${lyric.slug}`"
              class="card card--clickable"
          >
           {{ lyric.number }} {{ lyric.title }}
          </nuxt-link>
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    let albums;
    try {
      albums = await $content('discography').fetch();

      await albums.forEach(async album => {
        album.lirycs = await $content("lyrics").where({ album: album.slug }).sortBy('number').fetch();
      });
    } catch (e) {
      error({ message: "Lyrics not found" });
    }
    return { albums };
  },
}
</script>
