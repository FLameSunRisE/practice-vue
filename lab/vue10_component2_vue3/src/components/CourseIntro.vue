<template>
  <li>
    <h2>{{ id }}-{{ isCurrent }}</h2>
    <button @click="toggleCourseDetail">Show detail</button>
    <button @click="toggleCurrent">toggle current class</button>
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
      isCurrent: this.current,
    };
  },
  methods: {
    toggleCourseDetail() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleCurrent() {
      this.isCurrent = !this.isCurrent;
      //this.current = !this.current;
    },
  },
};
</script>