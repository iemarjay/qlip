<template>
<div class='text-white flex items-center fo'>
  <div class='max-w-6xl px-4 py-4 md:py-8 w-full flex items-center mx-auto'>
    <nuxt-link to='/'>
      <logo class='h-7 md:h-9' />
    </nuxt-link>

    <div class='hidden sm:block ml-auto text-lg font-medium'>
      <nuxt-link to='#' class='mx-6'>
        <span>Mint Store</span>
      </nuxt-link>

      <nuxt-link to='#' class='mx-6'>
        <span>Marketplace</span>
      </nuxt-link>

      <nuxt-link to='#' class='mx-6'>
        <span>Roadmap</span>
      </nuxt-link>

      <nuxt-link to='#' class='mx-6'>
        <span>QLIP Token</span>
      </nuxt-link>

      <nuxt-link to='#' class='mx-6'>
        <span>Whitepaper</span>
      </nuxt-link>
</div>

    <div class='flex ml-auto sm:ml-6'>
      <nuxt-link to='#' class='border-primary border rounded-3xl px-7 py-3 ml-6'>
        <span class='text-sm'>Join Community</span>
      </nuxt-link>

      <button class='md:hidden'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>

</style>
