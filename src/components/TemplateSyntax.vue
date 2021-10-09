<template>
  <h2>Interpolations</h2>
  <!-- {{}} 형태의 Mustaches 문을 통해 데이터 바인딩을 할 수 있습니다. -->
  <div>다음 데이터는 msg입니다. -> {{ msg }}</div>
  <!-- v-once 명령을 활용하면 최초 마운트 이후에는 데이터를 변경하지 않습니다.-->
  <div v-once>다음 데이터는 변하지 않습니다. -> {{ msg }}</div>
  <!-- v-html 명령을 활용하면 HTML 템플릿 문자열을 사용할 수 있습니다. -->
  <!-- 하지만 템플릿을 이용한 동적 렌더링을 많이 활용하는 것은 XSS를 염려할 때 좋은 생각이 아닙니다. -->
  <div>
    다음 데이터는 순수 HTML 템플릿 문입니다. ->
    <span v-html="rawHtml" />
  </div>
  <!-- Mustaches 문은 HTML 어트리뷰트 내에서는 사용될 수 없습니다. -->
  <!-- v-bind 문을 사용하면 어트리뷰트에서도 데이터에 접근할 수 있습니다. -->
  <div>
    다음 button 태그의 disabled 어트리뷰트는 동적으로 변할 수 있습니다.
    <button v-bind:disabled="isDisabled">버튼</button>
  </div>
  <!-- 복잡한 형태의 JS Expression도 데이터 바인딩을 적용할 수 있습니다. -->
  <!-- 단, Statement 혹은 여러 Expression의 경우에는 이를 활용할 수 없습니다. -->
  <div>
    {{
      isDisabled
        ? '위 버튼은 Disabled 상태입니다.'
        : '위 버튼은 Disabled 상태가 아닙니다.'
    }}
  </div>
  <h2>Directives</h2>
  <!-- 앞서 설명한 v-bind, v-once 등의 Directive는 Vue에서 제공하는 특별한 어트리뷰트입니다.
  각각의 Directive는 하나의 JS Expression이어야 하며, 해당 Expression의 변화에 따라 DOM에 사이드 이펙트를 유발하는 역할을 합니다. -->
  <div>
    다음 span태그는 isVisible값에 따라 보여지는지의 여부가 다릅니다.
    <span style="font-weight: bold" v-if="isVisible">짜잔!</span>
  </div>
  <!-- 일부 Directives는 Arguments를 가질 수 있습니다. 이 경우에는 `:` 콜론이 붙습니다. -->
  <div>
    다음 a 태그의 href는 동적입니다!
    <a v-bind:href="dynamicHref">링크</a>
  </div>
  <div>
    다음 button 태그의 onClick 액션은 동적입니다!
    <button v-on:click="onClick">버튼</button>
  </div>
  <!-- Arguments도 자체도 동적으로 전달할 수 있습니다.
  이 때는 `[]` 괄호를 사용합니다. -->
  <div>
    다음 a 태그는 argument 자체가 동적으로 전달됩니다!
    <a v-bind:[attributeName]="dynamicHref">링크</a>
  </div>
  <!-- Modifier는 Directive가 특정한 방식으로 바인딩되어야 하는 경우에 사용됩니다.
  이는 `.` 를 통해 적용될 수 있습니다. -->
  <div>
    <form v-on:submit.prevent="onSubmit">
      다음 form 태그의 submit 함수에는 defaultPrevent가 알아서 적용됩니다.
      <input type="submit" value="전송" />
    </form>
  </div>
  <h2>Shorthands</h2>
  <!-- 보다 간단한 문법으로 Directive를 작성할 수 있습니다. -->
  <!-- v-bind Directive는 단순히 `:` 콜론을 활용함으로써 줄일 수 있습니다. -->
  <div>
    다음 두 a 태그는 v-bind Shorthands를 활용하여 간결하게 작성했으나,
    결과적으론 이전과 동일합니다.
    <a :href="dynamicHref">링크1</a>
    <a :[attributeName]="dynamicHref">링크2</a>
  </div>
  <!-- v-on Directive는 단순히 `@` 을 활용함으로써 줄일 수 있습니다. -->
  <div>
    다음 두 button 태그는 v-on Shorthands를 활용하여 간결하게 작성했으나,
    결과적으론 이전과 동일합니다.
    <button @click="onClick">버튼</button>
    <button @[eventName]="onClick">버튼</button>
  </div>
  <h2>Caveats</h2>
  <ul>
    <li>
      동적 Arguments 값은 `null`의 경우를 제외하고는 String으로 간주됩니다.
      `null`인 경우에는 알아서 해당 태그의 바인딩이 제거됩니다. 반면, String이
      아닌 값에 대해서는 경고를 유발합니다.
    </li>
    <li>
      동적 Argument expression에는 기본적으로 공백(` `)과 따옴표(")를 사용할 수
      없습니다. 만약 복잡하게 계산되는 Expression을 동적 Argument로 활용하고자
      한다면, computed 프로퍼티를 활용하세요.
    </li>
    <li>
      Template expression은 기본적으로 격리되어 있는 형태입니다. 때문에 `Math`와
      `Date` 같은 일부 글로벌 객체에 대해서만 접근할 수 있으며, 임의로 커스텀한
      글로벌 변수 등에는 접근할 수 없습니다.
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TemplateSyntax',
  data() {
    return {
      msg: 1,
      eventName: 'click',
      rawHtml: `<span style="color:red">It is Red</span>`,
      isDisabled: false,
      isVisible: true,
      dynamicHref: 'https://naver.com',
      attributeName: 'href',
      onClick: () => {
        alert('버튼을 클릭했습니다!');
      },
      onSubmit: () => {
        alert('전송 완료!');
      },
    };
  },
});
</script>

<style scoped>
li {
  text-align: left;
}
</style>