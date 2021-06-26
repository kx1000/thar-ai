<template>
  <main>
    <section v-if="post">
      <nav class="mb-8" aria-label="go back">
        <router-back class="block" />
      </nav>

      <article class="text-content">
        <img
          v-if="post.cover"
          :src="post.cover"
        >
        <!-- <h6 class="inline py-1 px-2 mr-1 bg-gray text-white text-sm font-medium rounded-sm">{{ post.category }}</h6> -->
        <h1 class="text-content">{{ post.title }}</h1>
        <nuxt-content :document="post" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.post.title + ' ∙ THAR AI',
    }
  },
  async asyncData({ $content, params, error }) {
    let post;
    try {
      post = await $content("discography", params.album).fetch();
    } catch (e) {
      error({ message: "Album not found" });
    }
    return { post };
  },
}
</script>
