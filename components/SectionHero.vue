<template>
  <div class="bg-image-hero bg-cover">
    <div
      class="
        max-w-6xl
        px-4
        py-16
        md:py-24
        w-full
        flex flex-col
        items-center
        justify-center
        text-center
        mx-auto
      "
    >
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
        Africa’s No.1 cross-chain NFT platform
      </h1>
      <p
        class="
          max-w-2xl
          text-indigo-100 text-lg
          md:text-xl
          font-medium
          mb-8
          md:mb-10
        "
      >
        QLIP provides value for creators, collectors, mainstream artists and
        decentralized store users.
      </p>
      <div class="w-full">
        <button
          class="
            bg-gradient-to-b
            from-primary
            to-primary-500
            hover:to-primary
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

        <div
          class="
            relative
            my-10
            md:my-16
            h-60
            md:h-96
            max-w-xl
            md:max-w-3xl
            border-4 border-indigo-50 border-opacity-5
            mx-auto
            flex
            items-center
            justify-center
          "
        >
          <iframe
            class="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/aUCViBzDjWk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <!--          <button class="absolute" @click="showYoutube = true">-->
          <!--            <svg-->
          <!--              class="w-20 md:w-28 h-20 md:h-28"-->
          <!--              viewBox="0 0 100 101"-->
          <!--              fill="none"-->
          <!--              xmlns="http://www.w3.org/2000/svg"-->
          <!--            >-->
          <!--              <path-->
          <!--                d="M50 4.06123C24.636 4.06123 3.99997 24.6952 3.99997 50.0612C3.99997 75.4272 24.636 96.0612 50 96.0612C75.364 96.0612 96 75.4272 96 50.0612C96 24.6952 75.364 4.06123 50 4.06123ZM36.084 72.1292L35.918 28.1372L74 49.9892L36.084 72.1292Z"-->
          <!--                fill="white"-->
          <!--              />-->
          <!--            </svg>-->
          <!--          </button>-->
        </div>
      </div>
    </div>
    <youtube v-if="showYoutube" @close="showYoutube = false" />
  </div>
</template>

<script>
export default {
  name: "SectionHero",
  data() {
    return {
      showYoutube: false,
    }
  },
}
</script>

<style>
.bg-image-hero {
  background-image: url("/hero-pattern.png");
}
</style>
