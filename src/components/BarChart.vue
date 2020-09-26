<template>
  <div>
    <v-chart :options="option" style="width: auto; margin: 0 auto;" />
  </div>
</template>

<script>
// const moment = require('moment')

export default {
  name: "BarChart",
  props: ['maxVal', 'currVal', 'critVal', 'title'],
  methods: {
    popRandomColor(){
      if (this.currVal <= this.critVal) {
        return '#ff0000'
      } else {
        return '#00ff00'
      }
    }
  },
  computed: {
  },
  data() {
    return {
      option: {
        title: {
          text: this.title
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        // legend: {
        //   orient: 'vertical',
        //   left: 10,
        //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        // },
        grid: {
          // left: '3%',
          // right: '4%',
          // bottom: '3%',
          containLabel: true,
          y2: 10
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
        xAxis: {
          type: 'category',
          show: true,
        },
        yAxis: {
          type: 'value',
          show: true,
          max: this.maxVal
        },
        series: [
          {
            name: 'zaloga',
            type: 'bar',

            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [{
              max: this.maxVal,
              value: this.currVal,
              itemStyle: {color: this.popRandomColor()},
            }]
          },
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
