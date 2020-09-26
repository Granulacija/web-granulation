<template>
  <div>
    <b-container class="padding">
      <b-card @click="clicked(idx)" v-for="(experiment, idx) in granulationData" :key="experiment.Experiment_ID" class="mt-4 hover-pointer">
        {{ experiment.Experiment_ID }}
      </b-card>
    </b-container>
    <Materials v-if="showModal"  @close="closeModal" :experiment="currentExperiment"/>
  </div>
</template>

<script>
import data from '@/assets/materialni_list.json'
import Materials from "@/views/Materials";

export default {
  name: "MaterialList",
  components: {Materials},
  data: function () {
    return {
      granulationData: data,
      currentExperiment: [],
      showModal: false,
    }
  },
  methods: {
    clicked: function (idx) {
      this.currentExperiment = this.granulationData[idx];
      this.showModal = true;
    },
    closeModal: function () {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
.padding {
  padding: 5em 1em;
}
.hover-pointer:hover {
  background-color: turquoise;
}
</style>