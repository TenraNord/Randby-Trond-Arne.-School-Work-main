const app = Vue.createApp({
  data() {
    return {
      name: "Trond Arne",
      age: 32,
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/04/06/08/18/wallpaper-7903247_1280.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.age + 5;
    },
    calculateRandom() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
