<template>
  <div>
    <md-table v-model="news" @md-selected="onSelect">
      <md-table-row
      >
        <md-table-cell>
          <img :src="news0.img" alt="" style="width:auto;">
        </md-table-cell>
        <md-table-cell>{{ news0.subject }}</md-table-cell>
      </md-table-row>
      <md-table-row
      >
        <md-table-cell>
          <img :src="news1.img" alt="" style="width:auto;">
        </md-table-cell>
        <md-table-cell>{{ news1.subject }}</md-table-cell>
      </md-table-row>
      <md-table-row
      >
        <md-table-cell>
          <img :src="news2.img" alt="" style="width:auto;">
        </md-table-cell>
        <md-table-cell>{{ news2.subject }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  name: "apt-news-table",
  data() {
    return {
      news0: [],
      news1: [],
      news2: [],
    };
  },
  mounted() {
    http.get(`/map/policynews`).then(({ data }) => {
      this.news0 = data[0];
      this.news1 = data[1];
      this.news2 = data[2];
      console.log(this.news0);
      console.log(this.news1);
      console.log(this.news2);
    });
  },
  methods: {
    onSelect: function (items) {
      this.selected = items;
    },
  },
};
</script>
