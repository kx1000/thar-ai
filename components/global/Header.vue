<template>
  <div>
    <div class="block lg:hidden sticky inset-0">
      <button @click="toggleMenu" id="menu-toggle" class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none">
        <svg class="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </button>
    </div>
    <div v-bind:class="{hidden: isMenuHidden}" class="w-full sticky inset-0 h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20" style="top:5em;">
      <ul class="list-reset">
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <nuxt-link
              class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400"
              to="/biography"
          >
            <span class="pb-1 md:pb-0 text-sm">Biography</span>
          </nuxt-link>
        </li>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <nuxt-link
              class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400"
              to="/discography"
          >
            <span class="pb-1 md:pb-0 text-sm">Discography</span>
          </nuxt-link>
        </li>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <nuxt-link
              class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400"
              to="/blog"
          >
            <span class="pb-1 md:pb-0 text-sm">Lyrics</span>
          </nuxt-link>
        </li>
        <li class="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent">
          <nuxt-link
              class="block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent lg:hover:border-gray-400"
              to="/contact"
          >
            <span class="pb-1 md:pb-0 text-sm">Contact</span>
          </nuxt-link>
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
.scrim-bg {
  &::before {
    content: '';
    z-index: -1;
    background-color: var(--bg);
    @apply absolute bottom-0 inset-x-0 h-12 mb-4 transition-colors duration-200 ease-in-out;
  }
  &::after {
    content: '';
    z-index: -1;
    opacity: 1;
    animation: fadeIn1 500ms ease-in-out;
    @apply pointer-events-none absolute bottom-0 inset-x-0 h-16 -mb-12;
    background: linear-gradient(to bottom, #111827, cubic-bezier(0.15, 0, 0.45, 1), transparent);
  }
}
.nuxt-link-exact-active {
  @apply text-gray-200 border-gray-400 bg-gray-800 bg-opacity-25 cursor-default;
}

.light-mode {
  & .scrim-bg {
    &::after {
      animation-name: fadeIn2;
      background: linear-gradient(to bottom, #e5e7eb, cubic-bezier(0.15, 0, 0.45, 1), transparent);
    }
  }
  & .nuxt-link-exact-active {
    @apply text-primary-700 border-gray-600 bg-gray-100;
  }
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
