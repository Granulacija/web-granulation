<template>
    <div>
        <b-container>
            <b-card v-for="experiment in granulationData" :key="experiment.Experiment_ID" class="mt-4 hover-pointer">
                {{ experiment.Experiment_ID }}
            </b-card>
            <b-card class="mt-4 hover-pointer">
                Live stream
            </b-card>
        </b-container>
    </div>
</template>

<script>
import data from '@/assets/hekaton.json'

export default {
    name: "GranulationList",
    data: function () {
        return {
            granulationData: data,
        }
    },
}
</script>

<style scoped>

</style>