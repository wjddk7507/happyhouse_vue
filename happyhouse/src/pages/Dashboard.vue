<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
<!-- 
          <md-card-content>
            <div>
              <iframe src="https://land.naver.com/news/" width="240px" height="306.5px" scrolling="no">
                <p>Your browser does not support iframes.</p>
              </iframe>
            </div>
          </md-card-content> -->
      </div>
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
                <apt-news-table></apt-news-table>
              </md-tab>
            </md-tabs>
          </template>
        </apt-news-card>
      </div>
    </div>
  </div>
</template>

<script>
import TopAptList from './DashBoard/TopAptList.vue';
import AptNewsCard from './DashBoard/AptNewsCard.vue';
import AptNewsTable from './DashBoard/Child/AptNewsTable.vue';
import PolicyNewsTable from './DashBoard/Child/PolicyNewsTable.vue';

export default {
  components: {
    TopAptList,
    AptNewsCard,
    AptNewsTable,
    PolicyNewsTable
  },data() {
    return {
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]],
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De",
          ],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
          ],
        },
        options: {
          axisX: {
            showGrid: false,
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
    };
  },
};
</script>