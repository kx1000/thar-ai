<template>
  <main>
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Contact</h1>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts;
    try {
      posts = await $content("projects").fetch();
    } catch (e) {
      error({ message: "Projects not found" });
    }
    return { posts };
  },
}
</script>
