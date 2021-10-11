<template>
  <!-- `:class` 명령으로 데이터에 대해 클래스 바인딩을 할 수 있습니다. -->
  <!-- 아래 `div`는 `isActive`, `hasError` 데이터가 변경될 때 적절히 갱신됩니다. -->
  <!-- 물론 `computed` 프로퍼티를 활용할 수도 있습니다. -->
  <h2>Binding HTML Classes</h2>
  <div
    class="box"
    :class="{
      active: isActive,
      error: hasError,
    }"
  >
    안녕하세요.
  </div>
  <!-- 아래와 같이 사용할 수도 있습니다. -->
  <div class="box" :class="[activeClass, errorClass]">안녕하세요.</div>
  <h2>Binding Inline Styles</h2>
  <!-- 클래스가 아닌, 인라인 형태로 직접 스타일 바인딩을 할 수도 있습니다. -->
  <div
    :style="{
      color: activeColor,
      fontSize: bigFontSize + 'px',
    }"
  >
    안녕하세요.
  </div>
  <!-- 일반적으로는 아래와 같이 별도로 스타일 객체를 갖춘 뒤 바인딩을 하는 것이 유용합니다. -->
  <div>
    <button :style="coolButtonStyle">짱 멋진 버튼!</button>
  </div>
  <!-- 마찬가지로 Array 형태로 바인딩을 할 수도 있습니다. -->
  <div>
    <button :style="[coolButtonStyle, { fontSize: bigFontSize + 'px' }]">
      짱 멋지고 큰 버튼!
    </button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'StyleBinding',
  data() {
    return {
      isActive: true,
      hasError: true,
      activeColor: 'red',
      bigFontSize: 30,
      coolButtonStyle: {
        background: 'black',
        fontWeight: 'bold',
        padding: '1rem',
        color: 'white',
        borderRadius: '1rem',
        border: 'none',
        boxShadow: '1px 1px 6px grey',
      },
    };
  },
  computed: {
    activeClass() {
      return 'active';
    },
    errorClass() {
      return 'error';
    },
  },
});
</script>

<style scoped>
.box {
  display: inline-block;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid black;
}

.active {
  font-weight: bold;
}

.error {
  color: palevioletred;
}
</style>