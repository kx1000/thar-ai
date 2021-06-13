<template>
  <div>
    <div class="block lg:hidden sticky inset-0">
      <button @click="toggleMenu" id="menu-toggle" class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none">
        <svg class="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </button>
    </div>
    <div v-bind:class="{hidden: isMenuHidden}" class="w-full sticky inset-0 h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 lg:shadow-none lg:bg-transparent z-20" style="top:5em;">
      <ul class="list-reset">
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
  name: 'Header',
  data() {
    return {
      isMenuHidden: true,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuHidden = !this.isMenuHidden;
    }
  }
}
</script>

<style lang="postcss" scoped>
.menu-item {
  color: white;
  letter-spacing: 10px;
  text-transform: uppercase;
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
