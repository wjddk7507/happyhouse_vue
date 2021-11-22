<template>
  <div>
    <md-card md-with-hover>
      <div @click="openLoadView">
        <!-- <md-ripple> -->
        <md-card-media-actions>
          <md-card-media>
            <img src="@/assets/img/apt.png" alt="Cover" />
          </md-card-media>
          <md-card-header-text>
            <div class="apt-title">
              <div class="md-title">{{ house.아파트 }}</div>
              <div class="md-subhead">{{ house.법정동 }}</div>
            </div>
            <p>거래금액 : {{ house.거래금액 }}</p>
            <p>거래일 : {{ house.년 }}-{{ house.월 }}-{{ house.일 }}</p>
            <p>건축년도 : {{ house.건축년도 }}</p>
            <p>전용면적 : {{ house.전용면적 }}</p>
            <p>층 : {{ house.층 }}</p>
          </md-card-header-text>

          <md-card-actions> </md-card-actions>
          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-media-actions>
        <!-- </md-ripple> -->
      </div>
      <div v-if="isMap">
        <house-load-view :addr="this.addr"></house-load-view>
      </div>
    </md-card>
  </div>
  <!-- 
  거래금액: (...)
거래유형: (...)
건축년도: (...)
년: (...)
법정동: (...)
아파트: "신동아블루아광화문의꿈"
월: (...)
일: (...)
전용면적: (...)
중개사소재지: (...)
지번: (...)
지역코드: (...)
층: (...)
해제사유발생일: (...)
해제여부: (...) -->
</template>

<script>
import { mapActions } from "vuex";
import HouseLoadView from "@/pages/House/Child/HouseLoadView.vue";

const houseStore = "houseStore";

export default {
  name: "HouseListRow",
  data() {
    return {
      isColor: false,
      isMap: false,
      addr: '',
    };
  },
  props: {
    house: Object,
  },
  components: {
    HouseLoadView,
  },
  methods: {
    ...mapActions(houseStore, ["detailHouse"]),
    selectHouse() {
      // console.log("listRow : ", this.house);
      // this.$store.dispatch("getHouse", this.house);
      this.detailHouse(this.house);
    },
    colorChange(flag) {
      this.isColor = flag;
    },
    openLoadView() {
      this.addr = '서울특별시 ' + this.house.법정동 + ' '+this.house.지번;
      this.isMap = !this.isMap? true:false;
    },
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

//
<style lang="scss" scoped>
// .md-card {
//   width: 320px;
//   margin: 7px;
//   display: inline-block;
//   vertical-align: top;
// }
// .md-card-header {
//   color: black;
// }
// .md-card img {
//   width: 320px;
//   height: 200px;
//   object-fit: cover;
// }
// .apt-title {
//   margin: 10px 10px 10px 10px;
// }
//
</style>
<style lang="scss" scoped>
.md-card img {
  width: 320px;
  height: 200px;
  object-fit: cover;
}
.apt-title {
  font-size: 20px;
}
</style>
