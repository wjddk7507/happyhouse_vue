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
    <div class="pagination">
      <button class="pageBtn">&lt;</button>
      <button class="pageBtn" v-for="index in naviSize" :key="index" @click="calPage(index)">
        {{ index }}
      </button>
      <button class="pageBtn">&gt;</button>
    </div>
    <div
      v-if="userInfo != null && userInfo.admin == 1"
      class="md-layout-item md-size-100 text-right"
    >
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
      totalPageCount: 0,
      countPerPage: 5,
      currentPage: 0,
      naviSize: 0,
    };
  },
  created() {
    this.calPage(1);
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "BoardWrite" });
    },
    async calPage(cur) {
      await http.get(`/board/getTotalCount`).then(({ data }) => {
        this.currentPage = cur;
        this.totalPageCount = data;
        this.naviSize = Math.ceil(this.totalPageCount / this.countPerPage);
      });
      await http
        .get(`/board`, {
          params: { pg: this.currentPage, spp: this.countPerPage },
        })
        .then(({ data }) => {
          this.articles = data;
          // console.log(data);
        });
    },
  },
};
</script>
<style>
.pagination {
  text-align: center;
  margin-top:10px;
}
.pageBtn {
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #f9f9f9 5%, #e9e9e9 100%);
	background-color:#f9f9f9;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#43a047;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:6px 11px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}
.pageBtn:hover {
	background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	background-color:#e9e9e9;
}
.pageBtn:active {
	position:relative;
	top:1px;
}
</style>
