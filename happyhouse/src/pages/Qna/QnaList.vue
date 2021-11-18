<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Q&A</h4>
            <p class="category">문의사항이 있으시면 남겨주세요.</p>
          </md-card-header>
        </md-card>
      </div>
      <md-button class="md-raised" @click="moveWrite()">문의하기</md-button>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-80"
      >
        <qna-item
          v-for="(question, index) in questions"
          :key="index"
          v-bind="question"
        />
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common";
import QnaItem from "@/pages/Qna/Child/QnaItem";

export default {
  name: "QnaList",
  components: {
    QnaItem,
  },
  data() {
    return {
      questions: [],
    };
  },
  created() {
    http.get(`/qna`).then(({ data }) => {
      this.questions = data;
    });
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "QnaWrite" });
    },
  },
};
</script>
