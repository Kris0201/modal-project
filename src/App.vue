<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    
    <Modal theme="sale" @close="toggleModal">
      <!-- 可在此寫template (slots) ，此處資訊會傳至子元件標有<slot></slot>的區域中-->
      <h1>Ninjia Giveaway!</h1>
      <p>Grab your ninjia swag for half price!</p>
      <template v-slot:links>
       
        <!-- 
          1. 具名slot：在Modal元件中的a連結想要另外呈現在子元件的 .action中而非<slot></slot>範圍內
          2. v-slot只能與template標籤搭配使用。
          3. 不具名的slot會被預設為default名稱，因此可利用<template #default>或<template v-slot:default>來指定尚未提供name 的slot區塊 -->
        <a href="https://www.google.com/">Hello, Google</a>
      </template>
    </Modal>

    <!--
      1. @close=""是從子元件emit來的，父元件會對其進行監聽，並在事件被觸發時去執行(fire)@close=""內的程式。
      2. 本例中目的為「點擊灰色區域後要關掉Modal，而因為其指令目的與父元件中的button效用一樣，故寫成@close="toggleModal"，等於子元件的closeModal函式要在點擊後去呼叫父元件中的toggleModal這個程式
      -->
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
