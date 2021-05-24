<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!--:class="{sale: theme===sale}"表示動態綁定一個class，而是否加上sale這個class的條件是 theme===sale的值為true的時候，若為false則不加上sale這個class-->
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>


<script>
export default {
  //props：將父元件中設定透過prop傳給Modal子元件
  props: ["header", "text", "theme"],

  methods: {
    //emit events：將子元件中的設定透過emit events傳給父元件--對灰色區域點擊後關掉Modal，close為自訂名稱
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
</style>