<template>
  <b-container>
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col md="3">
        <bar-chart title="ZU" :max-val="10" :crit-val="3" :curr-val="2" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Vezivo" :max-val="35" :crit-val="5" :curr-val="3.4" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Razgrajevalo" :max-val="25" :crit-val="5" :curr-val="5.5" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Polnilo" :max-val="25" :crit-val="5" :curr-val="5.8" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Topilo 1" :max-val="65" :crit-val="10" :curr-val="0" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Topilo 1" :max-val="30" :crit-val="5" :curr-val="6" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Razgrajevalo 1" :max-val="25" :crit-val="5" :curr-val="6.5" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Razgrajevalo 2" :max-val="15" :crit-val="3" :curr-val="4.5" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Lubrikant" :max-val="5" :crit-val="2" :curr-val="3" ></bar-chart>
      </b-col>
      <b-col md="3">
        <bar-chart title="Razgrajevalo 2" :max-val="3" :crit-val="1" :curr-val="0" ></bar-chart>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import BarChart from "@/components/BarChart";
import moment from 'moment';
console.log(moment)



export default {
  name: "Granulation",
  components: {BarChart},
  computed: {
  }
}
</script>

<style scoped>

</style>
