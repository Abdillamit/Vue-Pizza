import { ref } from "vue";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/firebase/config";


 export const useDocument = () => {
  const addPizza = async (pizza) => {
    const error = ref(null);

    try {
      const collectionRef = collection(firestore, "pizzas");
      await addDoc(collectionRef, pizza);
      error.value=null

    } catch (err) {
      error.value = err.massage;
      console.log(error.value);
    }
  };
  return { addPizza };
};
