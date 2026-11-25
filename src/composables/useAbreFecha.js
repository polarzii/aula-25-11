import { ref } from 'vue';

export function useAbreFecha(inicial = false) {
    const aberto = ref(inicial);

    function alternar() {
        aberto.value = !aberto.value;
    }

    return { aberto, alternar };
}
