<template>
  <div class="wrapper">

    <router-view />
  </div>

</template>


<script>
import Header from "@/components/Header.vue";

import { useDocument } from "./compasables/useDocument.js";
import { useStore } from "vuex";
import { NUMBER_UNARY_OPERATORS } from "@babel/types";

export default {
  components: { Header },

  setup() {
    const { addPizza } = useDocument()
    const store = useStore()

    const sendFire =  async () => {
       await addPizza({
        name:NUMBER_UNARY_OPERATORS,
        catagory:'ajflkdsjafl;asd',
        price:Infinity,
        age:'the oldest'
      })
    }
    return {
      sendFire,
      store
    }
  }

}
</script>
<style>
@import url(./assets/css/app.css);
</style>
