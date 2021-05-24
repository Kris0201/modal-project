<template> 
  

  <h1>{{title}}</h1>
  <!--子元件Modal有兩個屬性: header & text-->
  <Modal :header="header" text="text"/>


  
</template>

<script>
import Modal from './components/Modal.vue'


export default {
  name: 'App',
  components:{Modal},
  data(){
    return{
      title: 'My First Vue App :)',
      header:'Sign up for the Giveaway',
      text:'have a good day :)'
    }
    
  },
  methods:{
     
  }
  
}
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

h1{
  color: red;
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
