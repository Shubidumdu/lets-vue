<template>
  <h2>v-if</h2>
  <!-- 특정 상황에 대해 Condtional하게 렌더링을 할 수 있습니다. -->
  <!-- 참고로 `v-if`와 `v-for`는 동일한 요소에 함께 사용될 수 없습니다. 이 경우 `v-if`가 우선시 됩니다. -->
  <div v-if="condition === 'perfect'">Perfect!</div>
  <div v-else-if="condition === 'good'">Good!</div>
  <div v-else>Not Bad!</div>
  <h2>v-show</h2>
  <!-- `v-show`는 `v-if`문과 유사하지만, 단순히 `display` 속성만 토글링한다는 점에서 차이가 있습니다.-->
  <!-- 또한, 이 경우에는 `v-else`문 등을 사용할 수 없고, 템플릿 요소에다 직접 적용할 수도 없습니다. -->
  <div v-show="condition === 'perfect'">You're very cool!</div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ConditionalRendering',
  data() {
    return {
      condition: 'perfect',
    };
  },
});
</script>

<style scoped>
</style>