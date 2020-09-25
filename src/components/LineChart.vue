<template>
  <div>
    <v-chart :options="option"/>
  </div>
</template>

<script>
export default {
  name: "LineChart",
  data() {
    return {
      option: {
        title: {
          text: 'Granulacija'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['takeOne']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'time',
          // boundaryGap: false,
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'takeOne',
            type: 'line',
            data: [1, 2, 3, 4, 5, 230, 210]
          },
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
