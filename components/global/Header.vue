<template>
  <div>
    <div class="w-full sticky inset-0 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 lg:shadow-none lg:bg-transparent z-20" style="top:5em;">
      <ul class="ml-6 lg:ml-0 list-reset">
        <li class="my-5">
          <nuxt-link to="/biography" class="menu-item my-5 p-2">Biography</nuxt-link>
        </li>
        <li class="my-5">
          <nuxt-link to="/discography" class="menu-item my-5 p-2">Discography</nuxt-link>
        </li>
        <li class="my-5">
          <nuxt-link to="/lyrics" class="menu-item my-5 p-2">Lyrics</nuxt-link>
        </li>
        <li class="my-5">
          <nuxt-link to="/contact" class="menu-item my-5 p-2">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="postcss" scoped>
.menu-item {
  letter-spacing: 10px;
  text-transform: uppercase;
  cursor: pointer !important;
}

.menu-item:hover {
  background: #E3061E;
}

.nuxt-link-active {
  @apply text-white bg-red-700 cursor-default;
}

/* Need two because of smoother switching between color modes */
@keyframes fadeIn1 {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeIn2 {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
