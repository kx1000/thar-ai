<template>
  <main>
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Biography</h1>
      <div class="text-content" v-html="$md.render(biography)">
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: 'BIOGRAPHY ∙ THAR AI',
  },
  async asyncData({ $content, error }) {
    let biography;
    try {
      biography = (await $content("site").fetch())[0].biography;
    } catch (e) {
      error({ message: "Biography not found" });
    }

    return { biography };
  },
}
</script>
