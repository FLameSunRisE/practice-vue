<template>
  <section>
    <h3>{{ userName }}</h3>
    <h4>{{ age }}</h4>
    <br />
    <h1>{{ user }}</h1>
    <h3>{{user2Name}}</h3>
    <h4>{{user2Age}}</h4>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  //data(){ return{userName:"Mark Ho"}}
  setup() {
    const userNameRef = ref("Mark Ho");
    const ageRef = ref(45);
    const userRef = ref({ userName: "James Liu", age: 36 });
    setTimeout(function () {
      userNameRef.value = "Meng-Hang Ho";
      ageRef.value += 1;
      userRef.value.userName = "Po-Wei Liu"
      userRef.value.age += 1;
    }, 5000);
    return { userName: userNameRef, age: ageRef, user: userRef,
    user2Name:userRef.value.userName, user2Age:userRef.value.age };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>