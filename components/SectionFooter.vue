<template>
  <footer>
    <div class="max-w-6xl px-4 w-full mx-auto">
      <div class="py-16 md:py-24 w-full grid md:grid-cols-2">
        <logo class="h-16 mb-10" />

        <div class="grid grid-cols-2">
          <div
            class="
              grid grid-rows-4
              gap-4
              text-white text-base
              lg:text-lg
              font-medium
            "
          >
            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>Mint Store</span>
            </nuxt-link>

            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>Marketplace</span>
            </nuxt-link>

            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>Roadmap</span>
            </nuxt-link>

            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>QLIP Token</span>
            </nuxt-link>

            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>Whitepaper</span>
            </nuxt-link>
          </div>

          <div
            class="
              grid grid-rows-6
              gap-4
              text-white text-base
              lg:text-lg
              font-medium
            "
          >
            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>Twitter</span>
            </nuxt-link>

            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>Facebook</span>
            </nuxt-link>

            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>Youtube</span>
            </nuxt-link>

            <nuxt-link to="#" class="mx-3 lg:mx-6">
              <span>Medium</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SectionFooter",
}
</script>

<style scoped></style>
