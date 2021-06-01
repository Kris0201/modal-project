<template>
  <div class="backdrop" @click.self="closeModal">
    <!--修飾符.self：@click加上修飾符.self，.self 的作用只會觸發元素自己(.backdrop)的事件行為，由子層元素(.modal)傳遞來的事件(即冒泡的事件傳遞)則不會觸發-->

    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!--:class="{sale: theme===sale}"表示動態綁定class-->

      <slot></slot>
      <!-- <slot></slot>會去讀取並渲染出寫在<Modal></Modal>中的內容，因此如果在<slot></slot>中寫任何東西都不會被讀取，除非在<Modal></Modal>裡面沒有預設，才會讀取寫在<slot></slot>的內容 -->

      <div class="actions">
        <!-- 具名slot：會去讀取擁有 v-slot且相對應名稱的slot -->
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  //props：將父元件中的設定透過prop傳給Modal子元件
  props: ["theme"],

  methods: {
    //custom events：將子元件中設定的事件emit(發射)給父元件，使父元件對此事件可進行監聽，close為自訂的事件名稱：本例目的為對灰色區域點擊後關掉Modal
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>


<style>
/*加上scoped之後就可以阻止此處style設定影響其它元件的style設定 */
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.modal h1 {
  /*此設定可以覆寫父元件的h1設定，但也會改變父元件的h1設定(雙向影響)*/
  color: lightgreen;
  border: none;
  padding: 0;
}

.modal.sale {
  background: rgb(248, 154, 120);
  text-shadow: 0.1em 0.1em 0.2em rgb(245, 120, 4);
}

.modal.sale p {
  color: white;
  text-shadow: none;
}

.modal .actions{
  text-align: center;
  margin: 30px 0 10px 0;
  
}
.modal .actions a{
  color: blueviolet;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.modal.sale .actions{
  color: white;
}

.modal.sale .actions a{
  color: white;
}



</style>