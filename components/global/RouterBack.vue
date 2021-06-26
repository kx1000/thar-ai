<template>
  <nuxt-link @click.native="to ? null : $router.go(-2)" :to="to ? to : '/'" class="back inline-block hvr-grow">
    <img src="~assets/img/arrow-circle-left.svg" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: { // ? Override with a path instead of router back
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.back {
  background: #e3061e;
  padding: 13px;
}
</style>