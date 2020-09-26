<template>
  <div>
    <v-chart v-if="showChart" :options="option" style="width: auto; margin: 0 auto;" />
  </div>
</template>

<script>
// const moment = require('moment')
export default {
  name: "LineChart",
  props: ['title', 'xData', 'yData', 'yHistory'],
  computed: {
    zipData() {
      return this.xData.map((e, i) => {
        return [e, this.yData[i]];
      });
    },
  },
  watch: {
    // title: function (val) {
    //   this.showChart = false;
    //   this.option.title.text = val;
    //   this.showChart = true;
    // },
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

      this.option.yAxis.min = Math.min.apply(Math, val);
      this.option.yAxis.max = Math.max.apply(Math, val);

      this.$nextTick(() => {
        // Add the component back in
        this.showChart = true;
      });
    },
    yHistory: function(val) {

      this.showChart = false;
      this.option.series = [
        {
          name: this.title,
          type: 'line',
          data: this.yData
        }
      ];
      this.option.legend.data = [this.title];

      for (let i = 0; i < val.length; i++) {
        this.option.legend.data.push(val[i].name);
        this.option.series.push({
          name: val[i].name,
          type: 'line',
          data: val[i].y
        });
      }
      let tmp  = this.option;
      this.option = {};
      this.option = tmp;
      this.$nextTick(() => {
        // Add the component back in
        this.showChart = true;
      });
    },
  },
  data() {
    return {
      showChart: true,
      option: {
          title: {
              text: this.title
          },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            var colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';
            let rez = '' + params[0].axisValue + '';
            //console.log(params); //quite useful for debug
            params.forEach(item => {
              //console.log(item); //quite useful for debug
              var xx = '<p>'   + colorSpan(item.color) + ' ' + item.seriesName + ': ' + item.data + ' C' + '</p>'
              rez += xx;
            });

            return rez;
          }
        },
        legend: {
          data: [this.title]
        },
        grid: {
          // left: '3%',
          // right: '4%',
          bottom: '10%',
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
        dataZoom: {
          show: true,
          start: 0
        },
        xAxis: {
          name: 'Time',
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
          name: 'Temperature [C]',
          min: Math.min.apply(Math, this.yData),
          max: Math.max.apply(Math, this.yData),
          // type: 'value'
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
