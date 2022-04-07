<template>
  <li>
    <h2>{{ id }}</h2>
    <button @click="toggleCourseDetail">Show detail</button>
    <ul v-if="detailsVisible">
      <li>{{ name }}</li>
      <li>{{ duration }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: ["id", "name", "duration"],
  data() {
    return {
      detailsVisible: true,
    };
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>