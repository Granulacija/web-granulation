<template>
  <div>
<!--    <p v-for="(step, idx) in steps" :key="idx"> {{ step.text }}</p>-->

<!--    <b-container class="padding">-->
<!--      <b-card v-for="(step, idx) in steps" :key="idx" class="mt-4 hover-pointer">-->
<!--        {{ step.text }}-->
<!--      </b-card>-->
<!--    </b-container>-->
    <b-container class="padding">
      <light-timeline :items='steps'></light-timeline>
    </b-container>
  </div>
</template>

<script>

export default {
  name: "Priprava",
  data: function () {
    return {
      steps: [
        {
          tag: "Korak 1",
          content: "Granulirno raztopino pripravimo v nerjaveči 50 L posodi. "
        },
        {
          tag: "Korak 2",
          color: 'orange',
          type: 'circle',
          htmlMode: true,
          content: "<div style=\"color:#ed9153;\">V posodo najprej dodamo Topilo 1 in Topilo 2.</div> "
        },
        {
          tag: "Korak 3",
          content: "Topila mešamo 15 min pri 100 obratih na minuto. "
        },
        {
          tag: "Korak 4",
          content: "Med mešanjem počasi dodajamo Zdravilno učinkovino in mešamo 30 min pri 200 obratih na minuto oziroma do bistre raztopine. "
        }
      ]
    }
  }
}
</script>

<style scoped>

.padding {
  padding: 3em 1em;
}
</style>
