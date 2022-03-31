Vue.createApp({
    data() {
        return {
            issue: "",
            issue2: ""
        }
    },
    methods: {

        setIssue(e) {
            this.issue = e.target.value
        },
        resetIssue() {
            this.issue = ""
        },
        resetIssue2() {
            this.issue2 = ""
        }
    },
    computed: {
        formatIssue() {
            console.log("output issue called, issue=", this.issue)
            if (this.issue === "") {
                return ""
            }
            // return `[!!]${this.issue}`
            return this.issue
        },
    }
}).mount("#app")
