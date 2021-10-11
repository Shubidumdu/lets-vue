<template>
  <h2>Computed Properties</h2>
  <div>
    이름 :
    <span class="bold">
      {{ fullName }}
    </span>
  </div>
  <div>
    현재 발매한 책의 유무 :
    <span class="bold">{{ publishedBooksMessage }}</span>
  </div>
  <h2>Watchers</h2>
  <div>
    질문을 입력하세요.
    <div><input v-model="question" /></div>
    <div>
      <img :src="yesno.image" />
    </div>
    <div>
      대답: <span class="bold">{{ yesno.answer }}</span>
    </div>
    <div>
      Forced: <span class="bold">{{ yesno.forced }}</span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import axios from 'axios';
export default defineComponent({
  name: 'Computed',
  data() {
    return {
      author: {
        firstName: 'WonGyo',
        lastName: 'Seo',
        books: ['2021 - 나는 꿀을 빨고 싶어'],
      },
      question: '',
      yesno: {
        answer: '',
        forced: '',
        image: '',
      },
    };
  },
  // `computed` 프로퍼티를 사용하면 data에 담긴 값에 대해 연산을 적용한 값을 캐시하여 활용할 수 있습니다.
  // 아래 `publishedBooksMessage`의 반환값은 `author.books`에 의존적입니다.
  // `methods`와 `computed`는 유사하지만, 캐시될 수 있는지의 여부가 주요한 차이라고 할 수 있습니다.
  // 만약, `computed`가 독립적인 데이터 연산만을 활용한다면, 이는 추후에 다시 연산되지 않습니다.
  computed: {
    publishedBooksMessage(): string {
      return this.author.books.length > 0 ? '있음' : '없음';
    },
    // 기본적으로 `computed`는 getter만을 사용하지만, 필요하다면 setter도 사용할 수 있습니다.
    fullName: {
      get(): string {
        return `${this.author.firstName} ${this.author.lastName}`;
      },
      set(newValue: string) {
        const names = newValue.split(' ');
        this.author.firstName = names[0];
        this.author.lastName = names[names.length - 1];
      },
    },
  },
  methods: {
    async getAnswer() {
      try {
        const res = await axios.get<{
          answer: string;
          forced: string;
          image: string;
        }>('https://yesno.wtf/api');
        const data = res.data;
        this.yesno = {
          ...this.yesno,
          answer: data.answer,
          forced: data.forced,
          image: data.image,
        };
      } catch (err) {
        this.yesno = {
          ...this.yesno,
          answer: '에러 발생!',
          forced: '',
          image: '',
        };
      }
    },
  },
  // `watch` 옵션을 사용한다면 데이터의 변경에 대해 직접 custom watcher를 구성힐 수 있습니다.
  // 이는 일반적으로 비동기적인 작업이나 비용이 많이 드는 작업을 반응적인 형태로 구현할 때 유용하게 활용됩니다.
  // `watch`를 통해서 `computed`와 같이 활용할 수도 있으나, 과도한 `watch` 옵션의 사용에는 주의해야 합니다.
  // 대부분의 경우 `computed` 만으로 간결하게 해결할 수 있기 때문이죠.
  watch: {
    question(newQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer();
      }
    },
  },
});
</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>