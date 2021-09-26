<template>
  <div>
    <div
      id="roadmap"
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
            "
          >
            QLIP Roadmap
          </h1>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4">
          <div v-for="(milestone, key) in data" :key="key">
            <road :active="milestone.completed" class="mb-6 mt-8" />

            <div class="px-5">
              <h2
                class="
                  text-white text-lg
                  md:text-xl
                  leading-normal
                  font-medium
                  mb-1
                "
              >
                {{ milestone.heading }}
              </h2>
              <h1
                class="
                  text-white text-xl
                  leading-normal
                  font-bold
                  md:text-3xl
                  mb-3
                "
              >
                {{ milestone.time }}
              </h1>

              <ul class="text-indigo-100 text-sm md:text-base font-medium pr-2">
                <li v-for="(text, i) in milestone.body" :key="i" class="mb-3">
                  <span class="inline">{{ text }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionRoadmap",
  data() {
    return {
      data: [
        {
          time: "Q4 2020",
          heading: "Business and Technical Research",
          completed: true,
          body: [],
        },
        {
          time: "Q1 2021",
          heading: "Idea hatch and Team Consolidation",
          completed: true,
          body: [],
        },
        {
          time: "Q2 2021",
          heading: "First Round Private Sale",
          completed: true,
          body: ["Hackathons and Grant funding", "QLIP v.1.0 Development"],
        },
        {
          time: "Q3 2021",
          heading: "QLIP v.1.0 Test and launch",
          completed: true,
          body: [
            "Second Round Private Sale",
            "Launch of Beningin Collectibles (on Polygon)",
            "QLIP NFT Academy Launch",
          ],
        },
        {
          time: "Q4 2021",
          heading: "Tokenizing african art and history",
          completed: true,
          body: [
            "Mainstream Artistes onboarding",
            "Independent Artiste onboarding",
            "Partnerships with African record labels, Fashion brands, Art platforms, Film houses, and more",
            "Tokenizing African history with various African countries",
          ],
        },
        {
          time: "Q4 2021",
          heading:
            "Developing the QLIP GENESIS GAMING METAVERSE (Launch on Polygon)",
          completed: true,
          body: [
            "Design of the Beningin Series P2E game",
            "Smart Contract Developments",
            "Testing Play 2 Earn functionalities",
            "Launch stage 1 play",
          ],
        },
        {
          time: "Q4 2021",
          heading: "Public Sale IDO",
          completed: true,
          body: [],
        },
        {
          time: "Q1 2022",
          heading: "QLIP v.1.1 Launch",
          completed: false,
          body: [
            "Launch stage 2 play of The Beningin Series",
            "Rolled out use case for Journalism sector",
            "Rolled out use case for Education sector",
          ],
        },
        {
          time: "Q1 2022",
          heading: "QLIP GENESIS GAMING METAVERSE Expansion",
          completed: false,
          body: [
            "Design of the Pack Lotteries P2E game",
            "Smart Contract Developments",
            "Testing Play 2 Earn functionalities",
            "Launch stage 1 play",
          ],
        },
        {
          time: "Q2 2022",
          heading: "QLIP V.1.2 Launch",
          completed: false,
          body: [
            "Rolled out use case for Entertainment Commerce and memory makers",
            "Rolled out use case for intellectual property rights",
            "Launch stage 2 play of the Pack Lotteries",
          ],
        },
        {
          time: "Q2 2022",
          heading: "QLIP GENESIS METAVERSE DESIGN",
          completed: false,
          body: ["Design of Tune Battles for the Metaverse"],
        },
        {
          time: "Q3 2022",
          heading: "QLIP v.2.0 Launch",
          completed: false,
          body: ["Defi Integration", "Metaverse developments"],
        },
        {
          time: "Q4 2022",
          heading: "QLIP GENESIS METAVERSE BETA LAUNCH",
          completed: false,
          body: ["Tune Battles Beta release"],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
