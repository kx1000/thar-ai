<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">Lyrics</h1>
      <posts post-type="lyrics" :amount="100"/>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("lyrics").fetch();
    } catch (e) {
      error({ message: "Lyrics not found" });
    }
    return { posts };
  },
}
</script>
