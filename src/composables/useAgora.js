import { ref, onUnmounted } from 'vue';

export function useAgora(intervalo = 60000) {
    const agora = ref(new Date());

    const timer = setInterval(() => {
        agora.value = new Date();
    }, intervalo);

    onUnmounted(() => {
        clearInterval(timer);
    });

    return agora;
}
