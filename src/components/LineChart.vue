<template>
  <div>
    <v-chart :options="option" style="width: auto; margin: 0 auto;" />
  </div>
</template>

<script>
// const moment = require('moment')
export default {
  name: "LineChart",
  props: ['title', 'xData', 'yData'],
  computed: {
    zipData() {
      return this.xData.map((e, i) => {
        return [e, this.yData[i]];
      });
    },
  },
  watch: {
    title: function (val) {
      this.showChart = false;
      this.option.title.text = val;
      this.showChart = true;
    },
    // xData: function(val) {
    //   this.showChart = false;
    //   this.option.xAxis.data = val;
    //   this.showChart = true;
    // },
    yData: function(val) {
      this.showChart = false;
      this.option.series = [
        {
          name: this.title,
          type: 'line',
          data: val
        }
      ];
      this.showChart = true;
    }
  },
  data() {
    return {
      showChart: true,
      option: {
          title: {
              text: this.title
          },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [this.title]
        },
        grid: {
          // left: '3%',
          // right: '4%',
          // bottom: '3%',
          containLabel: true,
          y2: 1
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false, title: "Podatki" },
        //     restore: { show: true, title: "Ponastavi" },
        //     saveAsImage: { show: true, title: "Shrani" }
        //   }
        // },
        dataZoom: {
          show: true,
          start: 0
        },
        xAxis: {
          type: 'category',
          data: this.xData
          // axisLabel: {
          //   formatter: function (value) {
          //     console.log(value);
          //     return moment(value, ["HH:mm:ss"]).toDate();
          //     // And other formatter tool (e.g. moment) can be used here.
          //   }
          // }
          // boundaryGap: false,
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: this.title,
            type: 'line',
            data: this.yData
          },
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
