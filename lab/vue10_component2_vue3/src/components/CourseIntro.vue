<template>
  <li>
    <h2>{{ id }}-{{ current }}</h2>
    <button @click="toggleCourseDetail">Show detail</button>
    <button @click="toggleCurrent">Set current</button>
    <ul v-if="detailsVisible">
      <li>{{ name }}</li>
      <li>{{ duration }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: ["id", "name", "duration", "current"],

  data() {
    return {
      detailsVisible: true,
    };
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleCurrent() {
      this.current = true;
    },
  },
};
</script>