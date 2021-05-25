<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <!--:class="{sale: theme===sale}"表示動態綁定一個class，而是否加上sale這個class的條件是 theme===sale的值為true的時候，若為false則不加上sale這個class-->

      <!--修飾符.self：在.backdrop的@click加上修飾符.self，目的在於阻止點擊到modal的橘色區域時關閉整個modal。.self 的作用只會觸發元素自己(.backdrop)的事件行為，由子層元素(.modal)傳遞來的事件(即冒泡的事件傳遞)則不會觸發-->
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
</style>