<template>
  <div>
    <!-- `v-for` 명령을 사용하면 배열로 이루어진 일련의 항목들을 렌더링할 수 있습니다. -->
    <!-- key는 React상에서 다루어지는 것과 유사합니다.-->
    <!-- 앞서 말한 바 있지만, `v-for`를 동일한 요소에 대해 `v-if`와 함께 사용하는 것을 권장하지 않습니다. 이 경우 `v-if`가 우선시됩니다. -->
    <div class="wrapper">
      <div v-for="game in games" :key="game.name">
        제목: {{ game.name }}<br />
        장르: {{ game.genre }}
      </div>
    </div>
    <!-- 각 항목의 index에도 접근할 수 있습니다. -->
    <div class="wrapper">
      <div v-for="(game, index) in games" :key="game.index">
        {{ index }} - {{ game.genre }} - {{ game.name }}
      </div>
    </div>
    <!-- Array뿐 아니라, Object에 대해서도 `v-for`를 사용할 수 있습니다. -->
    <!-- 이 경우, 각 항목의 순서는 `Object.keys()`로 반환되는 결과를 따르며, 이는 엔진에 따라 다르기 때문에 결과를 보장할 수 없습니다. -->
    <div class="wrapper">
      <div v-for="(value, key, index) in games[0]" :key="key">
        {{ index }} - {{ key }} - {{ value }}
      </div>
    </div>
    <!-- `v-for`는 정수 역시 전달받을 수 있습니다. 해당 수만큼 반복하며, 이 때 `n`은 1부터 시작함에 주의하세요. -->
    <div class="wrapper">
      <span v-for="n in 10" :key="n">{{ n }}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ListRendering',
  data() {
    return {
      games: [
        {
          name: '슈퍼마리오',
          genre: 'action',
        },
        {
          name: 'X-COM2',
          genre: 'strategy',
        },
      ],
    };
  },
});
</script>

<style scoped>
.wrapper {
  padding: 1rem;
}
</style>