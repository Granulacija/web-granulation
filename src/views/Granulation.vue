<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col>Header <b-btn>History</b-btn></b-col>
    </b-row>
    <b-row>
      <b-col md="3">
        <line-chart :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Inlet_air_T"></line-chart>
        <line-chart :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Product_T"></line-chart>
        <line-chart :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Outlet_air_T"></line-chart>
      </b-col>
      <b-col md="6">
        <line-chart :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Atomization_air_pressure"></line-chart>
      </b-col>
      <b-col md="3">
        <line-chart :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Inlet_air_humidity"></line-chart>
        <line-chart :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Inlet_air_flow"></line-chart>
        <line-chart :x-data="currentExperiment.Time_relative" :y-data="currentExperiment.Spray_rate"></line-chart>
<!--        Atomization_air_pressure-->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart";
import granulationData from '@/assets/hekaton.json'
import moment from 'moment';
console.log(moment)
export default {
  name: "Granulation",
  components: {LineChart},
  computed: {
    currentExperiment() {
      let currExp = granulationData[2];
      currExp.Time_relative = granulationData[2].Time_relative.map(e => moment(e, ["HH:mm:ss"]).unix())
      return currExp;
    }
  }
}
</script>

<style scoped>

</style>
