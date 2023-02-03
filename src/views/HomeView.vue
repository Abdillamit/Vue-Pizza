<template>
  <Header :isShow="true"/>
  <div class="content">
    <div class="container">
      <div class="content__top">
        <Filter />
        <Sort />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        <Pizza/>

      </div>
    </div>    
  </div>
</template>

<script>
import Pizza from '@/components/Pizza.vue'
import Sort from '@/components/Sort.vue'
import Filter from '@/components/Filter.vue'
import Header from "@/components/Header.vue";

export default {
  components: { Pizza, Sort, Filter,Header },
 
  setup() {
 
    return {
 
    }
  }
}
</script>

<style>

</style>