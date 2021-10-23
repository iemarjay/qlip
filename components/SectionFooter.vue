<template>
  <footer>
    <div class="max-w-6xl px-4 w-full mx-auto">
      <div class="py-16 md:py-24 w-full grid md:grid-cols-2">
        <div class="flex">
          <nuxt-link to="/">
            <logo class="h-16 mb-10" />
          </nuxt-link>
        </div>

        <div class="grid grid-cols-2">
          <div
            class="
              grid grid-rows-7
              gap-2
              lg:gap-4
              text-white text-base
              lg:text-lg
              font-medium
            "
          >
<!--            <nuxt-link to="/#store" class="mx-3 lg:mx-6">-->
<!--              <span>Mint Store</span>-->
<!--            </nuxt-link>-->

            <nuxt-link to="/#marketplace" class="mx-3 lg:mx-6">
              <span>Marketplace</span>
            </nuxt-link>

            <nuxt-link to="/#roadmap" class="mx-3 lg:mx-6">
              <span>Roadmap</span>
            </nuxt-link>

            <nuxt-link to="/#token" class="mx-3 lg:mx-6">
              <span>QLIP Token</span>
            </nuxt-link>

            <nuxt-link to="/#team" class="mx-3 lg:mx-6">
              <span>Team</span>
            </nuxt-link>

            <a href="https://academy.qlipit.io" class="mx-3 lg:mx-6">
              <span>NFT Academy</span>
            </a>

            <a
              href="/Landing%20Page.pdf"
              download="whitepaper"
              class="mx-3 lg:mx-6"
            >
              <span>Whitepaper</span>
            </a>
          </div>

          <div
            class="
              grid grid-rows-6
              gap-2
              lg:gap-4
              text-white text-base
              lg:text-lg
              font-medium
            "
          >
            <a href="https://twitter.com/Qlip_it" class="mx-3 lg:mx-6">
              <span>Twitter</span>
            </a>

            <a href="https://instagram.com/qlipit.io" class="mx-3 lg:mx-6">
              <span>Instagram</span>
            </a>

            <a href="https://youtu.be/Zj58i_j17YA" class="mx-3 lg:mx-6">
              <span>Youtube</span>
            </a>

            <a href="https://qlipit-io.medium.com/" class="mx-3 lg:mx-6">
              <span>Medium</span>
            </a>

            <a href="https://discord.gg/bJB5jBqn5n" class="mx-3 lg:mx-6">
              <span>Discord</span>
            </a>

            <div>
              <a
                href="mailto:partnerwithus@qlipit.io"
                class="ml-3 lg:ml-6 hover:underline"
                >partnerwithus@qlipit.io</a
              >,
              <a
                href="mailto:letscollaborate@qlipit.io"
                class="ml-3 lg:ml-6 hover:underline"
                >letscollaborate@qlipit.io</a
              >
            </div>
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
