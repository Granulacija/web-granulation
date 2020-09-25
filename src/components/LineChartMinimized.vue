<template>
  <div class="chartBorder">
    <v-chart :options="option" style="width: auto; margin: 0 auto;" />
  </div>
</template>

<script>
// const moment = require('moment')
export default {
  name: "LineChartMinimized",
  props: ['title', 'xData', 'yData'],
  computed: {
    zipData() {
      return this.xData.map((e, i) => {
        return [e, this.yData[i]];
      });
    },
  },
  data() {
    return {
      option: {
        title: {
          text: this.title
        },
        grid: {
          show: false,
          // containLabel: false,
          // borderWidth: 0,
          // backgroundColor: '#fff',
          // shadowColor: 'rgba(0, 0, 0, 0.3)',
          // shadowBlur: 2
        },
        xAxis: {
          // type: 'category',
          data: this.xData,
          show: false,
        },
        yAxis: {
          // type: 'value',
          show: false,

        },
        series: [
          {
            name: 'takeOne',
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

.echarts {
  width: 100%;
  height: 17em;
}

.chartBorder {
  margin-top: 5px;
  border: 2px solid black;
  border-radius: 25px;
}
</style>
