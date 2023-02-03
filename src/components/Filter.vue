<template>
    <div class="categories">
        <ul>
            <li v-for="category in categories " :key="category" :class="{ active: isActive === category }"
                @click="filterPizzas(category)">{{ category }}
            </li>

        </ul>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {

        const categories = ref(['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',])
        const isActive = ref('Все')
        const store = useStore()

        const filterPizzas = (category) => {
            isActive.value = category
            if (category==="Все") {
                store.commit("getPizzas")
            } else {
                store.commit("filterPizzas", category)
                
            }
        }
        return {
            categories,
            isActive,
            store,
            filterPizzas
        }
    }
}
</script>

<style>

</style>