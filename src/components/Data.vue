<template>
  <h2>Data Properties</h2>
  <div>Count : {{ count }}</div>
  <!-- 템플릿을 통해서도 메서드를 호출할 수 있습니다.
  다만 이런 상황에서는 `computed` 속성을 사용하는 것이 일반적입니다. -->
  <div>Count : {{ getData() }}</div>
  <h2>Methods</h2>
  <div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  // 컴포넌트의 `data` 옵션은 함수입니다.
  // vue는 새로운 컴포넌트 인스턴스를 생성할 때 해당 함수를 실행하여
  // 컴포넌트 인스턴스의 최상위와 `$data` 프로퍼티에 데이터가 저장됩니다.
  data() {
    return { count: 4 };
  },
  // `methods` 옵션을 통해 컴포넌트 인스턴스에 메서드를 추가할 수 있습니다.
  // 해당 옵션은 하나의 객체입니다.
  // 해당 메서드들에서 인스턴스의 프로퍼티를 참조하고자 하는 경우, `this`를 활용하면 됩니다.
  // 다만, 화살표 함수에는 `this`가 존재하지 않으므로, 이 경우에 활용할 수 없습니다.
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    // 템플릿에서 호출되는 메서드는 사이드 이펙트를 유발해서는 안됩니다.
    // 사이드이펙트가 요구되는 경우에는 라이프사이클 훅을 사용합니다.
    getData() {
      return this.count;
    },
  },
});
</script>

<style scoped>
</style>