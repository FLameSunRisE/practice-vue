<template>
  <li>
    <h2>{{ course.id }}</h2>
    <button @click="toggleCourseDetail">Show detail</button>
    <ul v-if="detailsVisible">
      <li>{{ course.name }}</li>
      <li>{{ course.duration }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  data() {
    return {
      course: { id: "POOP", name: "Python OOP", duration: 35 },
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