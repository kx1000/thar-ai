<template>
  <div class="container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <div class="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
      <nuxt-link
          class="text-red-600"
          to="/"
      >
        <span class="pb-1 md:pb-0 text-sm">Thar Ai</span>
      </nuxt-link>
      <Header class="lg:fixed" />
      <Links class="hidden lg:block lg:fixed bottom-0" />
    </div>
    <div class="w-full lg:w-4/5 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">
      <nuxt />
    </div>
  </div>
</template>