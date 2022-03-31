const app = Vue.createApp({
    data() {
        return {
            counter1: 0,
            todo: ''
        }
    },
    methods: {
        increase1() { this.counter1 = this.counter1 + 1 },
        decrease1() { this.counter1 = this.counter1 - 1 },
        increase2(step) { this.counter1 += step },
        decrease2(step) { this.counter1 -= step },
        setToDo(event) {
            this.todo = event.target.value
        }
    },
})
app.mount("#app")
