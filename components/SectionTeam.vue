<template>
  <div id="team" class="">
    <div
      id="token"
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
      <div class="py-16 md:py-24 w-full">
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
            QLIP Team
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
            Meet the team
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 items-start">
          <div class="md:order-2">
            <img
              :src="show.image"
              :alt="show.name"
              class="w-2/3 md:w-full mx-auto rounded-lg md:rounded-xl"
            />
          </div>
          <div class="md:col-span-2">
            <div class="text-center md:text-left mb-4">
              <h3 class="text-white text-2xl leading-tight font-bold my-1">
                {{ show.name }}
                <small>
                  <span v-if="show.nick"> aka</span>
                  {{ show.nick }}
                </small>
              </h3>
              <div class="text-lg text-indigo-200 mb-4">{{ show.role }}</div>

              <p
                v-for="p in show.body"
                :key="p"
                class="text-sm md:text-md lg:text-lg text-indigo-200 mb-2"
              >
                {{ p }}
              </p>
            </div>

            <div class="flex flex-wrap -mx-4 mt-6">
              <template v-for="(member, key) in members">
                <div
                  v-if="current !== key"
                  :key="key"
                  class="px-4 cursor-pointer w-1/3 md:w-1/5"
                  @click="current = key"
                >
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="max-w-full max-h-28 mx-auto rounded-lg"
                  />

                  <h3
                    class="
                      text-white text-lg text-center
                      leading-tight
                      font-bold
                      mt-2
                    "
                  >
                    {{ member.name }}
                  </h3>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTeam",
  data() {
    return {
      current: 0,
      members: [
        {
          image: "/team/Karla.jpg",
          name: "Karla Obakpolor",
          nick: "KarlaGod",
          role: "Founder & Business Development",
          body: [
            "KarlaGod is a  artiste, rapper, songwriter with various  projects, singles and videos to her art.",
            "She got into the Crypto space in 2016 through writing articles on steemit and started her business development and Digital Marketing career in 2017, helping startups and Tech companies grow.",
            "PLanE Services, Whatskool, Cilium are some of the companies she built.",
            "In 2020 she became an ambassador for Algorand, and  founded Crypto Smart, a Crypto Asset Management Company.",
          ],
          quote:
            "QLIP will revolutionize the NFT  in Africa and the world by bringing, real life, off chain utility to various arts  including the Music, Movie, Fashion, Photography, Visual arts industry and more.",
        },
        {
          image: "/team/Gyan.jpeg",
          name: "Gnana Lakshmi TC",
          nick: "Gyan",
          role: "CTO",
          quote:
            "QLIP is a project with a lot of potentials to throw light on  who do  have a platform to publicise their work internationally. Qlip creates  where the bias is removed and everyone can get  to display their artistic skills.",
          body: [
            "Gyan is a back end with over 9+ years as a Software Developer, she's passionate about women and has been leading the Bangalore network of Women Who Code for 5+ years.",
            "Currently an Ambassador for Algorand, Near, Aeternity.",
          ],
        },
        {
          image: "/team/Ayuba.jpg",
          name: "Ayuba Bashir",
          nick: "AMEC",
          role: "Advisor and Ambassador Coordinator",
          quote:
            "I worked for some crypto projects to get more involved with crypto and have more influence in the space by additionally building and managing supportive communities and making great friends.",
          body: [
            "Amec is  Aergo ambassador, CEO of crypto Syndicate and Vitex AMA series host.",
            "Currently an Ambassador for Algorand, Near, Aeternity.",
          ],
        },
        {
          image: "/team/Caleb.jpg",
          name: "Caleb Alikwe",
          nick: null,
          role: "Front-End Development  & NFT Education",
          quote: "QLIP is a bold statement of Growth.",
          body: [
            "Caleb is a Regenerative Nature and Context Abstract Artist, alongside Character Illustration with a touch of culture and fashion. He's created and sold various NFT's and is an avid user of NFT platforms.",
          ],
        },
        {
          image: "/team/Gooday.jpeg",
          name: "Godday Obakpolor",
          nick: null,
          role: "Brand and Graphics",
          quote:
            "Qlip is a huge project, which is gonna change a lot of things both in Art, Music, photography and more, and this is a great opportunity for me to know jow NFTs work.",
          body: [
            "Godday is a Graphic Designer who started his graphics and designs career in 2016.",
            "He's worked with various companies including, PLanE Services, Whatskool, Crypto Smart and a lot more as a designer.",
          ],
        },
        {
          image: "/team/Mark.jpg",
          name: "Mark Nwaeke",
          nick: null,
          role: "Curator",
          quote:
            "Qlip is a huge project, which is gonna change a lot of things both in Art, Music, photography and more, and this is a great opportunity for me to know jow NFTs work.",
          body: [
            "Mark Nwaeke is a visual hyperrealist and the Founder and CEO of MBMportraits.",
            "He is also a music artist, singer, and songwriter.",
          ],
        },
      ],
    }
  },
  computed: {
    show() {
      return this.members[this.current]
    },
  },
}
</script>

<style scoped></style>
