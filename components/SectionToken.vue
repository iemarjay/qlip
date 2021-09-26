<template>
  <div>
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
            QLIP Token
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
            Tokenomics Break Down
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex items-">
            <svg-chart class="w-1/3 md:w-full mx-auto" />
          </div>
          <div
            class="
              md:col-span-2
              px-8
              py-6
              border-indigo-50 border-opacity-5 border-2
              rounded-lg
            "
          >
            <div class="flex items-center mb-8">
              <div><svg-qlip-circle class="h-10 md:w-20 h-10 md:h-20" /></div>
              <div class="ml-8">
                <h3
                  class="
                    text-white text-lg
                    leading-normal
                    font-bold
                    md:text-3xl
                    text-xl
                  "
                >
                  Total Supply: 10,000,000 $QLP
                </h3>
                <p class="text-indigo-100 text-sm md:text-base font-medium">
                  Token Name: QLIP
                </p>
              </div>
            </div>

            <div
              class="font-normal text-sm md:text-base grid md:grid-cols-2 gap-6"
            >
              <div class="flex items-center mb-2">
                <span
                  class="md:h-4 md:w-4 h-2 w-2 mr-2 md:mr-4 rounded-full"
                  style="background: #4b23cc"
                ></span>
                <span class="text-indigo-100">Private Sale: &nbsp;</span>
                <span class="text-white font-semibold">5% at $0.1</span>
              </div>

              <div class="flex items-center mb-2">
                <span
                  class="md:h-4 md:w-4 h-2 w-2 mr-2 md:mr-4 rounded-full"
                  style="background: #ff7347"
                ></span>
                <span class="text-indigo-100">Airdrops: &nbsp;</span>
                <span class="text-white font-semibold">10%</span>
              </div>

              <div class="flex items-center mb-2">
                <span
                  class="md:h-4 md:w-4 h-2 w-2 mr-2 md:mr-4 rounded-full"
                  style="background: #35dcf3"
                ></span>
                <span class="text-indigo-100">Public Sale: &nbsp;</span>
                <span class="text-white font-medium">15% at $0.5</span>
              </div>

              <div class="flex items-center mb-2">
                <span
                  class="md:h-4 md:w-4 h-2 w-2 mr-2 md:mr-4 rounded-full"
                  style="background: #985afe"
                ></span>
                <span class="text-indigo-100">Marketing: &nbsp;</span>
                <span class="text-white font-medium">10%</span>
              </div>

              <div class="flex items-center mb-2">
                <span
                  class="md:h-4 md:w-4 h-2 w-2 mr-2 md:mr-4 rounded-full"
                  style="background: #ffb347"
                ></span>
                <span class="text-indigo-100">Team: &nbsp;</span>
                <span class="text-white font-medium">10%</span>
              </div>

              <div class="flex items-center mb-2">
                <span
                  class="md:h-4 md:w-4 h-2 w-2 mr-2 md:mr-4 rounded-full"
                  style="background: #004bff"
                ></span>
                <span class="text-indigo-100">Treasury: &nbsp;</span>
                <span class="text-white font-medium">25%</span>
              </div>

              <div class="flex items-center mb-2">
                <span
                  class="md:h-4 md:w-4 h-2 w-2 mr-2 md:mr-4 rounded-full"
                  style="background: #30d171"
                ></span>
                <span class="text-indigo-100">Mined via Staking: &nbsp;</span>
                <span class="text-white font-medium">25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionToken",
}
</script>

<style scoped></style>
