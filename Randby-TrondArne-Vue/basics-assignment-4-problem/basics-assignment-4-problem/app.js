const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragragIsVisible: true,
      inputBackgroundColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragragIsVisible,
        hidden: !this.paragragIsVisible,
      };
    },
  },
  methods: {
    toggleParagraphVisivility() {
      this.paragragIsVisible = !this.paragragIsVisible;
    },
  },
});
app.mount("#assignment");
