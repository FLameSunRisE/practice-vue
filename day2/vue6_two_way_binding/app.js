Vue.createApp({
    data() { return { issue: "" } },
    methods: {
        setIssue(e) {
            this.issue = e.target.value
        },
        resetIssue() {
            this.issue = ""
        }
    }
}).mount("#app")