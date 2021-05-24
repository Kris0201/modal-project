<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <!--子元件Modal有兩個屬性: header & text-->
    <Modal :header="header" :text="text" theme="sale" @click="toggleModal"/>
    <!--@click=""是從子元件emit來的，其目的為「點擊灰色區域後要關掉Modal，而因為其指令目的與父元件中的button效用一樣，故寫成@click="toggleModal"，等於子元件的closeModal函式要在點擊後去呼叫父元件中的toggleModal這個程式-->
  </div>
  <br>
  <button @click="toggleModal">open Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway",
      text: "have a good day :)",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal=!this.showModal
    },
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

h1 {
  color: red;
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
