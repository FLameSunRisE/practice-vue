const app = Vue.createApp({
    data() {
        return {
            counter1: 0
        }
    },
    methods: {
        increase1() { this.counter1 = this.counter1 + 1 },
        decrease1() { this.counter1 = this.counter1 - 1 }
    },
})
app.mount("#app")