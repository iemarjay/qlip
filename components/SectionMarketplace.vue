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
      <div class="py-16 md:py-24">
        <div class="text-center">
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
            Buy and sell your NFT’s and Collectibles in QLP, BNB, USDT, BTC on
            the QLIP marketplace.
          </p>
        </div>

        <div class="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div
            class="
              px-6
              md:px-10
              py-6
              md:py-10
              border-indigo-50 border-opacity-5 border-2
              rounded-lg
            "
          >
            <svg-chain class="h-10 md:w-20 h-10 md:h-20 mb-5" />
            <h1
              class="
                text-white text-lg
                leading-normal
                font-bold
                md:text-3xl
                text-xl
                mb-3
              "
            >
              Offchain NFTs
            </h1>
            <p
              class="max-w-3xl text-indigo-100 text-sm md:text-base font-medium"
            >
              Users will determine if their NFT is a Motion Graphic, Meme, Audio
              Visual (Music), Fashion design, Poetry or Others.
            </p>
          </div>

          <div
            class="
              px-6
              md:px-10
              py-6
              md:py-10
              border-indigo-50 border-opacity-5 border-2
              rounded-lg
            "
          >
            <svg-chain class="h-10 md:w-20 h-10 md:h-20 mb-5" />
            <h1
              class="
                text-white text-lg
                leading-normal
                font-bold
                md:text-3xl
                text-xl
                mb-3
              "
            >
              Order in NFTs
            </h1>
            <p
              class="max-w-3xl text-indigo-100 text-sm md:text-base font-medium"
            >
              Artiste can mint their works and have it delivered to the NFT
              buyer. Anyone who buys the NFT can get the physical work be it art
              on canvas, sculpture or fashion piece delivered to them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionMarketplace",
}
</script>

<style scoped></style>
