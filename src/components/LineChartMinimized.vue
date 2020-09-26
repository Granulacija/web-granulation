<template>
  <div class="chartBorder">
    <v-chart :options="option" style="width: auto; margin: 0 auto;z-index: 10" />
  </div>
</template>

<script>
// const moment = require('moment')
export default {
  name: "LineChartMinimized",
  props: ['title', 'xData', 'yData', 'xUnit', 'yUnit'],
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
          text: this.title,
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
          name: this.xUnit,
          // type: 'category',
          data: this.xData,
          show: true,
        },
        yAxis: {
          name: this.yUnit,
          // type: 'value',
          show: true,
          min: Math.min.apply(Math, this.yData),
          max: Math.max.apply(Math, this.yData),

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
  padding: 5px;
  background-color: rgba(175,238,255, 0.6);
}
</style>
