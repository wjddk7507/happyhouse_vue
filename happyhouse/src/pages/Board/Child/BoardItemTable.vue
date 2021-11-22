<template>
  <div>
    <md-table v-model="articles" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="글번호">{{ item.articleno }}</md-table-cell>
        <md-table-cell md-label="제목">
          <router-link
            :to="{ name: 'BoardView', params: { articleno: item.articleno } }"
            >{{ item.subject }}
          </router-link></md-table-cell
        >
        <md-table-cell md-label="작성자">{{ item.userid }}</md-table-cell>
        <md-table-cell md-label="작성일">{{ item.regtime }}</md-table-cell>
        <md-table-cell md-label="조회수">{{ item.hit }}</md-table-cell>
      </md-table-row>
    </md-table>
    <div v-if="userInfo != null && userInfo.admin == 1" class="md-layout-item md-size-100 text-right">
      <md-button class="md-raised md-success" @click="moveWrite()"
        >글 작성</md-button
      >
    </div>
    
  </div>
</template>

<script>
import http from "@/util/http-common";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "BoardItemTable",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  data() {
    return {
      selected: [],
      articles: [],
    };
  },
  created() {
    http.get(`/board`).then(({ data }) => {
      this.articles = data;
    });
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "BoardWrite" });
    },
  },
};
</script>
