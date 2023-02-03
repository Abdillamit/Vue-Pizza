<template>
  <div v-for="pizza in $store.state.filteredPizzas" :key="pizza.id" class="pizza-block">
    <img class="pizza-block__image" :src="pizza.imgUrl" alt="Pizza" />
    <h4 class="pizza-block__title">{{ pizza.name }}</h4>

    <div class="pizza-block__bottom">
      <div class="pizza-block__price">от {{ pizza.price }} c.</div>
      <div @click="addCart(pizza)" class="button button--outline button--add">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
        <i v-if="pizza.counter">{{ pizza.counter }}</i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { onMounted } from '@vue/runtime-core';
import { fetchPizzas } from '@/firebase/fetchPizzas';


export default {
  setup() {
    const store = useStore();
  //  const {pizzas,error,takePizzas}=fetchPizzas()
    


    const addCart=(item)=>{
      store.commit('addCartItem',item)
    }
    onMounted( ()=>{
      store.commit('getPizzas')
    })

    return {
      addCart,
      onMounted
    };
  },
 };
</script>

<style></style>
