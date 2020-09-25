<template>
  <div>
    <b-row >
      <b-col></b-col>
      <b-col></b-col>
      <b-col> <b-btn>History</b-btn></b-col>
    </b-row>
    <b-row class="padding">
      <b-col md="3">
        <line-chart-minimized class="minimized" :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Inlet_air_T" title="Inlet_air_T" @click.native="setCurrent('Inlet_air_T')"></line-chart-minimized>
        <line-chart-minimized :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Product_T" title="Product_T"  @click.native="setCurrent('Product_T')"></line-chart-minimized>
         <line-chart-minimized :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Outlet_air_T" title="Outlet_air_T" @click.native="setCurrent('Outlet_air_T')"></line-chart-minimized>
      </b-col>
      <b-col md="6" class="center">
        <line-chart class="mainChart" v-if="showMain" :x-data="currentExperiment.Time_relative" :y-data="currentExperiment[currentMainGraph]" :title="currentMainGraph"></line-chart>
      </b-col>
      <b-col md="3">
        <line-chart-minimized title="Inlet_air_humidity" :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Inlet_air_humidity" @click.native="setCurrent('Inlet_air_humidity')"></line-chart-minimized>
        <line-chart-minimized :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Inlet_air_flow" title="Inlet_air_flow" @click.native="setCurrent('Inlet_air_flow')"></line-chart-minimized>
        <line-chart-minimized :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Spray_rate" title="Spray_rate" @click.native="setCurrent('Spray_rate')"></line-chart-minimized>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart";
import granulationData from '@/assets/hekaton.json'
import moment from 'moment';
import LineChartMinimized from "@/components/LineChartMinimized";

export default {
  name: "Granulation",
  components: {LineChartMinimized, LineChart},
  data: function () {
    return {
      showMain: true,
      currentMainGraph: 'Product_T'
    }
  },
  computed: {
    currentExperiment() {
      let currExp = granulationData[2];
      currExp.Time_relative = granulationData[2].Time_relative.map(e => moment(e, ["HH:mm:ss"]).unix())
      return currExp;
    }
  },
  methods: {
    setCurrent (currentMainGraph) {
      this.showMain = false;
      this.currentMainGraph = currentMainGraph;
      this.showMain = true;
    }
  }
}
</script>

<style scoped>
.mainChart {
  height: 35em;
}
.center {
  margin: auto;

}
.padding {
  padding: 0 1em;
}
</style>
