<template>
  <main>
    <section v-if="post">
      <article class="text-content">
        <h1 class="text-logo mb-5">{{ post.title }}</h1>
        <img
          v-if="post.cover"
          :src="post.cover"
        >
        <div class="md:flex">
          <div class="md:flex-shrink-0 mt-10">
            <router-back class="block mr-5" />
          </div>
          <div class="mt-1 text-content">
            <nuxt-content :document="post" />
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
