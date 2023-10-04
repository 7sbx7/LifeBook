import { ref, onMounted, computed } from 'vue';

export default function useWindowWidth() {
  const windowWidth = ref<number>(window.innerWidth);

  const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
  };
  const isMobile = computed(() => {
    return windowWidth.value < 768 ? true : false;
  });
  onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
  });

  return {
    isMobile,
    windowWidth,
  };
}
