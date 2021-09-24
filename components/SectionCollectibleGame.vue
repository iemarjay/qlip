<template>
  <div>
    <div
      class="
        max-w-6xl
        px-4
        w-full
        flex flex-col
        items-center
        justify-center
        mx-auto
      "
    >
      <div class="py-16 md:py-24 text-center">
        <h1
          class="
            text-white text-lg
            leading-tight
            font-bold
            md:text-6xl
            text-4xl
            mb-3
          "
        >
          QLIP Collectible Gaming
        </h1>
        <p
          class="
            max-w-3xl
            text-indigo-100 text-lg
            md:text-xl
            font-medium
            mb-10
            md:mb-20
            mx-auto
          "
        >
          Buy and sell your NFT’s and Collectibles in QLP, BNB, USDT, BTC on the
          QLIP marketplace.
        </p>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="component in components"
            :key="component.text"
            class="
              px-6
              md:px-10
              py-6
              md:py-10
              border-indigo-50 border-opacity-5 border-2
              rounded-lg
              flex
              items-center
              justify-start
            "
          >
            <div>
              <component
                :is="component.icon"
                class="h-10 md:w-20 h-10 md:h-20"
              />
            </div>

            <div
              class="
                text-white text-base
                flex-grow-0
                md:text-xl
                text-left
                leading-normal
                font-bold
                text-lg
                ml-4
              "
            >
              {{ component.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionCollectibleGame",
  data() {
    return {
      components: [
        { text: "Packs completion", icon: "SvgCards" },
        { text: "NFT Lock up to reduce fees and earn $QLP", icon: "SvgSafe" },
        { text: "Use of Qlip NFT’s in Metaverses", icon: "SvgMetaverse" },
        { text: "Rap battle games with rapstar NFT’s", icon: "SvgSound" },
        { text: "Lottery biddings and winnings", icon: "SvgWin" },
        { text: "Auctions games and Avatar Creation", icon: "SvgAvatar" },
      ],
    }
  },
}
</script>

<style scoped></style>
