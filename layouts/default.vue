<template>
  <div class="container w-full flex flex-wrap mx-auto mx-0 pt-8 lg:pt-8 mt-8">
    <div class="w-full lg:w-3/12 lg:px-6 text-xl text-gray-800 leading-normal">
      <div class="lg:fixed">
       <nuxt-link class="text-red-600 mb-6 block hvr-grow animate__animated animate__fadeIn animate__delay-1s" to="/">
         <img src="~assets/img/tharai_logo_v1.svg" class="m-auto" />
       </nuxt-link>
       <Header class="mt-3 animate__animated animate__fadeIn animate__delay-2s" />
     </div>
      <div class="hidden lg:block lg:fixed bottom-0 ml-3">
        <Links />
        <div class="copyright text-red-700 uppercase my-5 text-sm font-semibold">
          Copyright by Thar Ai 2021 ©
        </div>
      </div>
    </div>
    <div class="w-full lg:w-9/12 mt-1 lg:mt-7 text-white leading-normal">
      <nuxt />
      <div class="block lg:hidden lg:fixed bottom-0">
        <Links />
        <div class="copyright text-red-700 uppercase my-5 text-sm font-semibold text-center">
          Copyright by Thar Ai 2021 ©
        </div>
      </div>
    </div>
  </div>
</template>