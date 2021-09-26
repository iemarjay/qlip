<template>
  <div>
    <div
      id="store"
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
          QLIP Mint Store
        </h1>
        <p
          class="
            max-w-3xl
            text-indigo-100 text-lg
            md:text-xl
            font-medium
            mb-8
            md:mb-10
          "
        >
          Mint your artworks of any format, audio, text, video, or Picture, with
          low fees.
        </p>
        <div class="w-full">
          <div
            class="
              relative
              py-14
              my-10
              md:my-16
              max-w-lg
              md:max-w-3xl
              rounded-sm
              border-2
              md:border-4
              border-indigo-50 border-opacity-5
              mx-auto
            "
          >
            <svg-video
              class="
                absolute
                top-10
                -right-3
                md:-right-10
                h-10
                sm:h-16
                md:h-20
                lg:h-24
              "
            />
            <svg-speaker
              class="
                absolute
                top-28
                -left-1
                sm:-left-4
                h-10
                sm:h-16
                md:h-20
                lg:h-24
              "
            />

            <div class="mx-auto flex flex-col justify-center items-center">
              <svg-brush class="h-24 w-24" />

              <h1 class="text-white text-2xl leading-tight font-bold my-3">
                Upload File in Any Format
              </h1>
              <p class="text-lg text-indigo-100 text-lg">
                PNG, GIF, JPG, WMV, MP4, MP3
              </p>

              <button
                class="
                  border-primary border
                  hover:bg-primary
                  rounded-4xl
                  text-lg
                  md:text-2xl
                  text-white
                  px-10
                  md:px-14
                  py-3
                  md:py-4
                  mt-9
                "
              >
                Buy QLIP Tokens
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          py-16
          md:py-24
          flex flex-col
          md:flex-row
          justify-center
          md:justify-between
          items-center
          w-full
        "
      >
        <img
          src="/africa.png"
          alt="NFT Store"
          class="md:order-2 max-w-xs w-1/2 mb-6 md:mb-auto"
        />

        <div class="md:w-7/12">
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
            QLIP Collectibles
          </h1>
          <p
            class="
              max-w-3xl
              text-indigo-100 text-lg
              md:text-xl
              font-medium
              mb-8
              md:mb-10
            "
          >
            Grab collectibles of your favorite artist from the various African
            Entertainment and Arts industry, in Music, Literature, Movies,
            Fashion, Visual arts, and participate in the QLIP gaming activities.
          </p>
          <button
            class="
              border-primary border
              hover:bg-primary
              rounded-4xl
              text-lg
              md:text-2xl
              text-white
              px-10
              md:px-14
              py-3
              md:py-4
            "
          >
            Buy QLIP Tokens
          </button>
        </div>
      </div>

      <div
        class="py-16 md:py-24 grid md:grid-cols-2 gap-6 items-stretch w-full"
      >
        <div
          class="
            bg-indigo-50 bg-opacity-5
            px-8
            md:px-16
            pt-8
            md:pt-16
            rounded-lg
          "
        >
          <svg-exhibit class="mb-8 h-20 md:w-40 h-20 md:h-40" />
          <h1
            class="
              text-white text-lg
              leading-normal
              font-bold
              md:text-3xl
              text-lg
              mb-3
            "
          >
            QLIP Exhibit
          </h1>
          <p
            class="
              max-w-3xl
              text-indigo-100 text-lg
              md:text-2xl
              font-medium
              mb-24
              md:mb-56
            "
          >
            Users can showcase their private or public collections to fans and
            collectors in a more media responsive format than just an NFT link.
          </p>
        </div>

        <div
          class="
            px-8
            md:px-16
            pt-8
            md:pt-16
            border-indigo-50 border-opacity-5 border-2
            rounded-lg
          "
        >
          <svg-store class="mb-8 h-20 md:w-40 h-20 md:h-40" />
          <h1
            class="
              text-white text-lg
              leading-normal
              font-bold
              md:text-3xl
              text-lg
              mb-3
            "
          >
            QLIP Decentralized store
          </h1>
          <p
            class="
              max-w-3xl
              text-indigo-100 text-lg
              md:text-2xl
              font-medium
              mb-24
              md:mb-56
            "
          >
            Users can mint their memories on the Blockchain and make them
            private with the QLIP APP
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionMintStore",
}
</script>

<style>
.bg-image-hero {
  background-image: url("/hero-pattern.png");
}
</style>
