<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      ></div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
      >
        <top-apt-list></top-apt-list>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-50 md-size-50"
      >
        <apt-news-card>
          <template slot="content">
            <span class="md-nav-tabs-title">News:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="시장동향" md-icon="cloud">
                <apt-news-table></apt-news-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="정책/제도" md-icon="cloud">
                <policy-news-table></policy-news-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="업계동향" md-icon="cloud">
                <house-news-table></house-news-table>
              </md-tab>
            </md-tabs>
          </template>
        </apt-news-card>
      </div>
    </div>
  </div>
</template>

<script>
import TopAptList from "./DashBoard/TopAptList.vue";
import AptNewsCard from "./DashBoard/AptNewsCard.vue";
import AptNewsTable from "./DashBoard/Child/AptNewsTable.vue";
import PolicyNewsTable from "./DashBoard/Child/PolicyNewsTable.vue";
import HouseNewsTable from "./DashBoard/Child/HouseNewsTable.vue";

export default {
  components: {
    TopAptList,
    AptNewsCard,
    AptNewsTable,
    PolicyNewsTable,
    HouseNewsTable,
  },
};
</script>
