<template>
  <div>
    <!-- `v-on` 명령을 사용하면 요소에 이벤트 리스너를 등록할 수 있습니다. -->
    <!-- 한편, 이 `v-on` 명령은 `@click`으로 줄여 사용할 수 있습니다. -->
    <button @click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <!-- 일반적인 이벤트 핸들러 사용 -->
    <button @click="greet">Greet 1</button>
    <!-- 이벤트 핸들러를 인라인 호출하는 경우 -->
    <button @click="greet2('Tommy')">Greet 2</button>
    <!-- 여러 개의 이벤트 핸들러를 호출 -->
    <button @click="greet(), greet2('Tommy')">Greet All!</button>
    <!-- Vue는 자체적인 `.stop`, `.prevent`, `.once` 등의 Event Modifier를 제공하며, 이를 이용해 DOM Event의 디테일한
    부분을 다룰 수 있습니다. -->
    <button @click.once="greet">Greet Once</button>
    <!-- 특정 키 입력에 대해서만 핸들러를 호출하게 해주는 Key Modifier도 존재합니다. -->
    <input @keyup.enter="pressEnter" />
    <!-- 이 Key Modifier를 적절히 활용하면 보다 복잡한 케이스에 대해서도 쉽게 처리할 수 있습니다.-->
    <input @keyup.alt.enter="pressMetaAndEnter" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'EventHandling',
  data() {
    return {
      name: 'Shubidumdu',
      counter: 0,
    };
  },
  methods: {
    greet() {
      alert(`Hello, Shubidumdu!`);
    },
    greet2(name: string) {
      alert(`Hello, ${name}!`);
    },
    pressEnter() {
      alert('You pressed Enter!');
    },
    pressMetaAndEnter() {
      alert('You pressed Meta and Enter!');
    },
  },
});
</script>

<style scoped>
</style>