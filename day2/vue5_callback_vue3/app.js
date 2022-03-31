const app = Vue.createApp({
    data() {
        return {
            counter1: 0,
            todo: '',
            urgent: "",
            checkedUrgent: ""
        }
    },
    methods: {
        commitUrgent() {
            this.checkedUrgent = this.urgent;
        },
        setUrgent(event) {
            this.urgent = event.target.value
        },
        submitForm() {
            alert("already submitted")
        },
        submitForm2(event) {
            event.preventDefault()
            alert("already submit form2")
        },
        increase1() { this.counter1 = this.counter1 + 1 },
        decrease1() { this.counter1 = this.counter1 - 1 },
        increase2(step) { this.counter1 += step },
        decrease2(step) { this.counter1 -= step },
        setToDo(e, greeting) {
            this.todo = `${greeting} ${e.target.value}`
        }
    },
})
app.mount("#app")