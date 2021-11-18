<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <house-search-bar></house-search-bar>
        <house-list />
        <house-detail />
      </div>
    </div>
  </div>
</template>

<script>
import HouseSearchBar from "@/pages/House/HouseSearchBar.vue";
import HouseList from "@/pages/House/HouseList.vue";
import HouseDetail from "@/pages/House/HouseDetail.vue";

export default {
  name: "House",
  components: {
    HouseSearchBar,
    HouseList,
    HouseDetail,
  },
};
</script>
