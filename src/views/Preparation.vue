<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="ZU" :max-val="10" :crit-val="3" :curr-val="2" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Vezivo" :max-val="35" :crit-val="5" :curr-val="3.4" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Razgrajevalo" :max-val="25" :crit-val="5" :curr-val="5.5" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Polnilo" :max-val="25" :crit-val="5" :curr-val="5.8" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Topilo 1" :max-val="65" :crit-val="10" :curr-val="0" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Topilo 1" :max-val="30" :crit-val="5" :curr-val="6" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Razgrajevalo 1" :max-val="25" :crit-val="5" :curr-val="6.5" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Razgrajevalo 2" :max-val="15" :crit-val="3" :curr-val="4.5" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Lubrikant" :max-val="5" :crit-val="2" :curr-val="3" ></bar-chart>
        </div>
      </b-col>
      <b-col md="2" class="m-2 mb-4 m-4">
        <div class="chart-wrapper">
          <bar-chart title="Razgrajevalo 2" :max-val="3" :crit-val="1" :curr-val="0" ></bar-chart>
        </div>
      </b-col>
    </b-row>
  </div>
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
  bar-chart {
    margin-top: 5px;
    border: 2px solid black;


  }
  .chart-wrapper {
    border-radius: 25px;
    padding: 5px;
    background-color: rgba(175,238,238, 0.6);
    padding-bottom: 0.5em;
  }
</style>
