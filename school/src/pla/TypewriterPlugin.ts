import { ref, onMounted, onUnmounted } from 'vue';

interface TypewriterOptions {
  text: string;
  speed?: number;
  mods?: boolean;
  sleep_time?: number;
}

export function useTypewriter(options: TypewriterOptions) {
  const { text, speed = 100, mods = false, sleep_time = 200 } = options;
  const index = ref(0);
  const currentText = ref('');
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  if (!text) {
    throw new Error('text值为空');
  }

  const type = () => {
    if (index.value < text.length) {
      currentText.value += text[index.value];
      index.value++;
      timeoutId = setTimeout(type, speed);
    } else {
      if (mods) {
        setTimeout(() => {
          index.value = 0;
          currentText.value = '';
          type();
        }, sleep_time);
      } else {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    }
  };

  onMounted(() => {
    type();
  });

  onUnmounted(() => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  });

  return { currentText };
}