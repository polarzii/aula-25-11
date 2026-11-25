import { ref, watch } from 'vue';

export function useLocalStorage(chave, valorInicial) {
    const salvo = localStorage.getItem(chave);
    const dado = ref(salvo !== null ? JSON.parse(salvo) : valorInicial);

    watch(dado, (novoValor) => {
        localStorage.setItem(chave, JSON.stringify(novoValor));
    }, { deep: true });

    return dado;
}