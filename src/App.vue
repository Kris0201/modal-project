<template> 
  <!-- template是Vue的標籤，為每個元件的基本要件 -->

  <h1>{{title}}</h1>
  <!--子元件Modal有兩個屬性: header & text-->
  <Modal header='Sign up for the Giveaway' text='have a good day :)'/>


  <!-- <input type="text" ref="name">
  <button @click="handleClick">click me</button> -->
</template>

<script>
import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components:{Modal},
  data(){
    return{
      title: 'My First Vue App :)'
    }
    
  },
  methods:{
      // handleClick(){
      //   console.log(this.$refs.name)
      //   this.$refs.name.classList.add('active')
      //   this.$refs.name.focus()
      // }
  }
  
}
</script>

<style>
 /*在每個component中的style設定會使所有元件中相同的元素或標籤吃到相同設定*/ 
#app { 
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  color: red;
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
