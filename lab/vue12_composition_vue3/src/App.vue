<template>
  <section>
    <h3>{{ userName }}</h3>
    <h4>{{ age }}</h4>
    <br />
    <h1>{{ user }}</h1>
    <h3>{{ user2Name }}</h3>
    <h4>{{ user2Age }}</h4>
    <br />
    <h1>{{ user3 }}</h1>
    <h3>{{ user3Name }}</h3>
    <h4>{{ user3Age }}</h4>
  </section>
</template>

<script>
import { ref, reactive, isRef, isReactive } from "vue";
export default {
  name: "App",
  //data(){ return{userName:"Mark Ho"}}
  setup() {
    const userNameRef = ref("Mark Ho");
    const ageRef = ref(45);
    const userRef = ref({ userName: "James Liu", age: 36 });
    const user3 = reactive({ userName: "Sean Chou", age: 32 });
    console.log(`ageRef=${ageRef.value}, user3 reactive=${user3}`);
    console.log(
      `ageRef is ref?${isRef(ageRef)}, is reactive?${isReactive(ageRef)}`
    );
    console.log(
      `user3 is ref?${isRef(user3)}, is reactive?${isReactive(user3)}`
    );
    setTimeout(function () {
      userNameRef.value = "Meng-Hang Ho";
      ageRef.value += 1;
      userRef.value.userName = "Po-Wei Liu";
      userRef.value.age += 1;
      user3.userName = "Shu-Yang Chou";
      user3.age += 2;
    }, 5000);

    return {
      userName: userNameRef,
      age: ageRef,
      user: userRef,
      user2Name: userRef.value.userName,
      user2Age: userRef.value.age,
      user3: user3,
      user3Name: user3.userName,
      user3Age: user3.age,
    };
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