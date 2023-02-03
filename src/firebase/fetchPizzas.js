
// import { collection, getDocs } from "firebase/firestore";
// import { ref } from "vue";

// export const fetchPizzas = () => {
//   const pizzas = ref([]);
//   const error = ref(null);


//   const takePizzas = async () => {
//     try {
//       const collectionRef = collection(firestore, "pizzas");
//       const { docs } = await getDocs(collectionRef);

//       pizzas.value = docs.map((item) => ({ ...item.data(), id: item.id }));
//       error.value = null;
    
//     } catch (err) {
//       error.value = err.massage;
//       console.log(error.value);
//     }
//   };
//   return {
//     pizzas,
//     error,
//     takePizzas,
//   };
// };
   