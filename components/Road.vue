<template>
  <div class="flex items-center relative h-16">
    <div>
      <div
        class="
          absolute
          rounded-full
          flex
          items-center
          justify-center
          top-0
          -left-4
          border-10 border-white
          box-content
        "
        :class="{ 'border-opacity-20': active, 'border-opacity-0': !active }"
      >
        <div class="rounded-full bg-white w-10 h-10"></div>
      </div>
    </div>
    <div
      class="
        bg-gradient-to-b
        from-secondary-200
        to-secondary-500
        rounded-sm
        w-full
        h-5
      "
    ></div>
  </div>
</template>

<script>
export default {
  name: "Road",
  props: {
    active: Boolean,
  },
}
</script>

<style scoped></style>
